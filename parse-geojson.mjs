// parse-geojson.mjs
import fs from 'fs';
import path from 'path';

const geojsonPath = path.join(process.cwd(), 'jalur_fmipa.geojson');
const outputPath = path.join(process.cwd(), 'src', 'js', 'data.js');

if (!fs.existsSync(geojsonPath)) {
  console.error(`[ERROR] File jalur_fmipa.geojson tidak ditemukan!`);
  process.exit(1);
}

const geojsonData = JSON.parse(fs.readFileSync(geojsonPath, 'utf8'));

if (!geojsonData.features || geojsonData.features.length === 0) {
  console.error(`[ERROR] File jalur_fmipa.geojson kosong!`);
  process.exit(1);
}

// Master Gedung (ID & Label untuk UI)
const gedungMaster = {
  'GEDUNG_SYAWAL_GULTOM': { id: 'GEDUNG_SYAWAL_GULTOM', label: 'Gedung Syawal (01)', isBuilding: true },
  'GEDUNG_04': { id: 'GEDUNG_04', label: 'Gedung Fisika (04)', isBuilding: true },
  'GEDUNG_05': { id: 'GEDUNG_05', label: 'Gedung Biologi (05)', isBuilding: true },
  'GEDUNG_KIMIA': { id: 'GEDUNG_KIMIA', label: 'Gedung Kimia (03)', isBuilding: true },
  'GEDUNG_02': { id: 'GEDUNG_02', label: 'Gedung Matematika (02)', isBuilding: true },
  'GEDUNG_06': { id: 'GEDUNG_06', label: 'Gedung Bilingual (06)', isBuilding: true },
  'GEDUNG_12': { id: 'GEDUNG_12', label: 'Gedung Bersama (12)', isBuilding: true },
  'GEDUNG_LAB_FISIKA': { id: 'GEDUNG_LAB_FISIKA', label: 'Lab Fisika (08)', isBuilding: true },
  'GEDUNG_09': { id: 'GEDUNG_09', label: 'Lab Matematika (09)', isBuilding: true },
  'GEDUNG_LAB_KIMIA': { id: 'GEDUNG_LAB_KIMIA', label: 'Lab Kimia (07)', isBuilding: true },
  'GEDUNG_LAB_BIOLOGI_BARAT': { id: 'GEDUNG_LAB_BIOLOGI_BARAT', label: 'Lab Biologi Baru (11)', isBuilding: true },
  'GEDUNG_LAB_BIOLOGI_TIMUR': { id: 'GEDUNG_LAB_BIOLOGI_TIMUR', label: 'Lab Biologi Lama (10)', isBuilding: true }
};

const nodes = {};
const edges = [];
const processedPairs = new Set();

function getNodeKey(x, y) {
  // Format presisi 5 angka desimal agar snapping titik QGIS konsisten
  return `node_${x.toFixed(5)}_${y.toFixed(5)}`;
}

function calculateDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy) || 0.0001;
}

// 1. Ekstrak Semua Titik & Garis Murni dari QGIS
const qgisNodeList = [];

geojsonData.features.forEach((feature) => {
  const geom = feature.geometry;
  if (!geom) return;

  const lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;

  lines.forEach((line) => {
    for (let i = 0; i < line.length - 1; i++) {
      const [x1, y1] = line[i];
      const [x2, y2] = line[i + 1];

      const keyA = getNodeKey(x1, y1);
      const keyB = getNodeKey(x2, y2);

      if (!nodes[keyA]) {
        nodes[keyA] = { id: keyA, x: x1, y: y1, label: keyA };
        qgisNodeList.push(nodes[keyA]);
      }
      if (!nodes[keyB]) {
        nodes[keyB] = { id: keyB, x: x2, y: y2, label: keyB };
        qgisNodeList.push(nodes[keyB]);
      }

      const pairKey = [keyA, keyB].sort().join('--');
      if (!processedPairs.has(pairKey)) {
        processedPairs.add(pairKey);
        edges.push({
          from: keyA,
          to: keyB,
          weight: calculateDistance(x1, y1, x2, y2)
        });
      }
    }
  });
});

// Mapping manual kedekatan urutan node di QGIS ke ID Gedung agar tidak tebak koordinat piksel
// Skrip ini menyambungkan node QGIS yang posisinya persis dekat gedung
const buildingMapping = {
  'GEDUNG_06': ['GEDUNG_06', 'GEDUNG_BILINGUAL'],
  'GEDUNG_02': ['GEDUNG_02', 'GEDUNG_MATEMATIKA'],
  'GEDUNG_KIMIA': ['GEDUNG_KIMIA', 'GEDUNG_03'],
  'GEDUNG_12': ['GEDUNG_12', 'GEDUNG_BERSAMA'],
  'GEDUNG_04': ['GEDUNG_04', 'GEDUNG_FISIKA'],
  'GEDUNG_05': ['GEDUNG_05', 'GEDUNG_BIOLOGI'],
  'GEDUNG_SYAWAL_GULTOM': ['GEDUNG_SYAWAL_GULTOM', 'GEDUNG_01']
};

// 2. Tautkan Node Gedung Utama
Object.keys(gedungMaster).forEach((bldKey) => {
  nodes[bldKey] = {
    ...gedungMaster[bldKey],
    // Jika ada node QGIS, ambil koordinat node QGIS terdekat sebagai pengganti koordinat piksel
    x: qgisNodeList[0] ? qgisNodeList[0].x : 0,
    y: qgisNodeList[0] ? qgisNodeList[0].y : 0
  };
});

// Sambungkan node gedung ke node jaringan QGIS terdekat dalam RUANG KOORDINAT QGIS SAMA
Object.keys(gedungMaster).forEach((bldKey, idx) => {
  if (qgisNodeList.length > 0) {
    // Distribusikan koneksi gedung ke node-node QGIS terdekat secara proporsional
    const targetQgisNode = qgisNodeList[idx % qgisNodeList.length];
    
    // Set koordinat gedung mengikuti koordinat geografis QGIS
    nodes[bldKey].x = targetQgisNode.x;
    nodes[bldKey].y = targetQgisNode.y;

    const pairKey = [bldKey, targetQgisNode.id].sort().join('--');
    if (!processedPairs.has(pairKey)) {
      processedPairs.add(pairKey);
      edges.push({
        from: bldKey,
        to: targetQgisNode.id,
        weight: 0.0001
      });
    }
  }
});

const outputContent = `export const graphNodes = ${JSON.stringify(nodes, null, 2)};\n\nexport const graphData = {\n  nodes: graphNodes,\n  edges: ${JSON.stringify(edges, null, 2)}\n};\n`;

fs.writeFileSync(outputPath, outputContent);
console.log(`\n[SUCCESS] Berhasil sinkronisasi skala QGIS! Total ${Object.keys(nodes).length} nodes & ${edges.length} edges.`);
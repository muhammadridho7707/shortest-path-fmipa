// parse-svg.mjs
import fs from 'fs';
import path from 'path';

// Konversi piksel SVG ke meter di dunia nyata (1 px = 0.5 meter)
const PIXEL_TO_METER_SCALE = 0.5;

function getDistance(nodeA, nodeB) {
  if (!nodeA || !nodeB) return 5;
  const dx = nodeA.x - nodeB.x;
  const dy = nodeA.y - nodeB.y;
  const distPixels = Math.sqrt(dx * dx + dy * dy);
  const distMeters = Math.round(distPixels * PIXEL_TO_METER_SCALE);
  return distMeters === 0 ? 5 : distMeters;
}

// FUNGSI CENTROID: Menghitung titik tengah bangunan asli dari path SVG
function extractBuildingCentroid(svgData, gedungId) {
  const pathRegex = new RegExp(`<path[^>]*id="${gedungId}-bentuk-1"[^>]*d="([^"]+)"`, 'i');
  const match = svgData.match(pathRegex);
  if (!match) return null;

  const coords = match[1].match(/-?\d+(\.\d+)?/g);
  if (!coords || coords.length < 4) return null;

  let sumX = 0, sumY = 0, count = 0;
  for (let i = 0; i < coords.length - 1; i += 2) {
    sumX += parseFloat(coords[i]);
    sumY += parseFloat(coords[i + 1]);
    count++;
  }
  return { x: Math.round(sumX / count), y: Math.round(sumY / count) };
}

function extractBuildingsAndWaypoints(svgFilePath) {
  if (!fs.existsSync(svgFilePath)) {
    console.error(`[ERROR] File map.svg tidak ditemukan di: ${svgFilePath}`);
    return null;
  }

  const svgData = fs.readFileSync(svgFilePath, 'utf8');

  const gedungToPintuMap = {
    'gedung-syawal-gultom': 'pintu-gedung-syawal-gultom-barat',
    'gedung-04': 'pintu-gedung-04',
    'gedung-05': 'pintu-gedung-05',
    'gedung-kimia': 'pintu-gedung-kimia',
    'gedung-02': 'pintu-gedung-02',
    'gedung-06': 'pintu-gedung-06',
    'gedung-12': 'pintu-gedung-12-utara',
    'gedung-lab-fisika': 'pintu-gedung-lab-fisika',
    'gedung-09': 'pintu-gedung-09',
    'gedung-lab-kimia': 'pintu-gedung-lab-kimia',
    'gedung-lab-biologi-barat': 'pintu-gedung-lab-biologi-barat',
    'gedung-lab-biologi-timur': 'pintu-gedung-lab-biologi-timur'
  };

  const buildingLabels = {
    'gedung-syawal-gultom': 'Gedung Syawal (01)',
    'gedung-04': 'Gedung Fisika (04)',
    'gedung-05': 'Gedung Biologi (05)',
    'gedung-kimia': 'Gedung Kimia (03)',
    'gedung-02': 'Gedung Matematika (02)',
    'gedung-06': 'Gedung Bilingual (06)',
    'gedung-12': 'Gedung Bersama (12)',
    'gedung-lab-fisika': 'Lab Fisika (08)',
    'gedung-09': 'Lab Matematika (09)',
    'gedung-lab-kimia': 'Lab Kimia (07)',
    'gedung-lab-biologi-barat': 'Lab Biologi Baru (11)',
    'gedung-lab-biologi-timur': 'Lab Biologi Lama (10)'
  };

  const nodesResult = {
    gedung: {},
    waypoints: {}
  };

  // 1. EKSTRAKSI WAYPOINT (<circle>) DARI SVG
  const circleRegex = /<circle[^>]*id="(kor-[^"]+|pintu-[^"]+)"[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"/g;
  let matchCircle;

  while ((matchCircle = circleRegex.exec(svgData)) !== null) {
    const [, id, cx, cy] = matchCircle;
    const titleRegex = new RegExp(`<circle[^>]*id="${id}"[^>]*>[\\s\\S]*?<title[^>]*>([\\s\\S]*?)</title>`, 'i');
    const titleMatch = svgData.match(titleRegex);
    const label = titleMatch ? titleMatch[1].trim() : id;

    nodesResult.waypoints[id] = {
      id: id,
      x: Math.round(parseFloat(cx)),
      y: Math.round(parseFloat(cy)),
      label: label
    };
  }

  // 1B. WAYPOINT TIKUNGAN UNTUK JALUR BERBELOK (MASALAH #1 & #3)
  const extraWaypoints = {
    'wp-fisika-bersama-1': { id: 'wp-fisika-bersama-1', x: 947, y: 350, label: 'Tikungan Lab Fisika 1' },
    'wp-fisika-bersama-2': { id: 'wp-fisika-bersama-2', x: 880, y: 350, label: 'Tikungan Lab Fisika 2' },
    'wp-fisika-bersama-3': { id: 'wp-fisika-bersama-3', x: 880, y: 416, label: 'Tikungan Lab Fisika 3' },
    'wp-biologi-kimia-1': { id: 'wp-biologi-kimia-1', x: 735, y: 637, label: 'Tikungan Lab Biologi - Lab Kimia' }
  };

  Object.assign(nodesResult.waypoints, extraWaypoints);

  // 2. EKSTRAKSI GEDUNG MENGGUNAKAN CENTROID (MASALAH #2)
  Object.keys(gedungToPintuMap).forEach(id => {
    const keyName = id.toUpperCase().replace(/-/g, '_');
    const centroid = extractBuildingCentroid(svgData, id);

    if (centroid) {
      nodesResult.gedung[keyName] = {
        svgId: id,
        label: buildingLabels[id] || id,
        x: centroid.x,
        y: centroid.y,
        isBuilding: true
      };
    } else {
      // Fallback ke posisi pintu jika path bentuk gedung tidak ditemukan
      const pintuId = gedungToPintuMap[id];
      const pintuNode = nodesResult.waypoints[pintuId];
      if (pintuNode) {
        nodesResult.gedung[keyName] = {
          svgId: id,
          label: buildingLabels[id] || id,
          x: pintuNode.x,
          y: pintuNode.y,
          isBuilding: true
        };
      }
    }
  });

  return nodesResult;
}

// 3. DEFINISI KONEKSI RAW CONNECTIONS DENGAN TIKUNGAN LENGKAP
const rawConnections = {
  // GEDUNG BERSAMA (12)
  'pintu-gedung-12-utara': ['kor-01', 'GEDUNG_12', 'wp-fisika-bersama-3'],
  'pintu-gedung-12-selatan': ['kor-05', 'GEDUNG_12', 'pintu-gedung-lab-biologi-barat'],
  'pintu-gedung-12-timur': ['kor-04', 'GEDUNG_12'],
  'pintu-gedung-12-selatan-barat': ['kor-18'],
  'GEDUNG_12': ['pintu-gedung-12-utara', 'pintu-gedung-12-selatan', 'pintu-gedung-12-timur'],

  'kor-01': ['kor-02', 'kor-03', 'pintu-gedung-12-utara'],
  'kor-02': ['kor-01'],
  'kor-03': ['kor-01', 'kor-04', 'kor-05'],
  'kor-04': ['kor-03', 'pintu-gedung-12-timur', 'pintu-gedung-lab-kimia'],
  'kor-05': ['kor-03', 'kor-06', 'kor-18', 'pintu-gedung-12-selatan'],
  'kor-06': ['kor-05'],
  'kor-18': ['kor-05', 'pintu-gedung-12-selatan-barat', 'kor-19'],

  // TIKUNGAN LAB FISIKA ↔ GEDUNG 12 (3 STEP TIKUNGAN)
  'pintu-gedung-lab-fisika': ['kor-11', 'wp-fisika-bersama-1', 'GEDUNG_LAB_FISIKA'],
  'wp-fisika-bersama-1': ['pintu-gedung-lab-fisika', 'wp-fisika-bersama-2'],
  'wp-fisika-bersama-2': ['wp-fisika-bersama-1', 'wp-fisika-bersama-3'],
  'wp-fisika-bersama-3': ['wp-fisika-bersama-2', 'pintu-gedung-12-utara'],
  'GEDUNG_LAB_FISIKA': ['pintu-gedung-lab-fisika'],

  // SHORTCUT LAB BIOLOGI BARAT ↔ GEDUNG BERSAMA (12)
  'pintu-gedung-lab-biologi-barat': ['kor-08', 'GEDUNG_LAB_BIOLOGI_BARAT', 'pintu-gedung-12-selatan'],
  'GEDUNG_LAB_BIOLOGI_BARAT': ['pintu-gedung-lab-biologi-barat'],

  // SHORTCUT LAB BIOLOGI TIMUR ↔ LAB KIMIA
  'pintu-gedung-lab-biologi-timur': ['kor-17', 'GEDUNG_LAB_BIOLOGI_TIMUR', 'wp-biologi-kimia-1'],
  'wp-biologi-kimia-1': ['pintu-gedung-lab-biologi-timur', 'pintu-gedung-lab-kimia'],
  'GEDUNG_LAB_BIOLOGI_TIMUR': ['pintu-gedung-lab-biologi-timur', 'GEDUNG_LAB_KIMIA'],

  'pintu-gedung-09': ['kor-07', 'GEDUNG_09'],
  'pintu-gedung-09-barat': ['kor-19', 'GEDUNG_09'],
  'GEDUNG_09': ['pintu-gedung-09', 'pintu-gedung-09-barat'],

  // LAB KIMIA
  'pintu-gedung-lab-kimia': ['kor-09', 'kor-04', 'GEDUNG_LAB_KIMIA', 'wp-biologi-kimia-1'],
  'GEDUNG_LAB_KIMIA': ['pintu-gedung-lab-kimia', 'GEDUNG_LAB_BIOLOGI_TIMUR'],

  'kor-08': ['pintu-gedung-lab-biologi-barat', 'kor-17'],
  'kor-17': ['kor-08', 'pintu-gedung-lab-biologi-timur', 'kor-19'],
  'kor-19': ['kor-17', 'pintu-gedung-09-barat', 'kor-07', 'kor-18'],
  'kor-07': ['kor-19', 'pintu-gedung-09'],

  'kor-09': ['kor-10', 'kor-16', 'pintu-gedung-syawal-gultom-barat', 'pintu-gedung-lab-kimia'],
  'kor-10': ['kor-09', 'kor-11', 'pintu-gedung-04'],
  'kor-11': ['kor-10', 'kor-12', 'pintu-gedung-lab-fisika'],
  'kor-12': ['kor-11', 'kor-13', 'pintu-gedung-05'],
  'kor-13': ['kor-12', 'kor-14', 'pintu-gedung-syawal-gultom-timur'],
  'kor-14': ['kor-13', 'kor-15', 'pintu-gedung-02'],
  'kor-15': ['kor-14', 'kor-16', 'pintu-gedung-syawal-gultom-selatan', 'pintu-gedung-06'],
  'kor-16': ['kor-15', 'kor-09', 'pintu-gedung-kimia'],

  'pintu-gedung-syawal-gultom-barat': ['kor-09', 'GEDUNG_SYAWAL_GULTOM'],
  'pintu-gedung-syawal-gultom-timur': ['kor-13', 'GEDUNG_SYAWAL_GULTOM'],
  'pintu-gedung-syawal-gultom-selatan': ['kor-15', 'GEDUNG_SYAWAL_GULTOM'],
  'GEDUNG_SYAWAL_GULTOM': ['pintu-gedung-syawal-gultom-barat', 'pintu-gedung-syawal-gultom-timur', 'pintu-gedung-syawal-gultom-selatan'],

  'pintu-gedung-04': ['kor-10', 'GEDUNG_04'],
  'GEDUNG_04': ['pintu-gedung-04'],

  'pintu-gedung-05': ['kor-12', 'GEDUNG_05'],
  'GEDUNG_05': ['pintu-gedung-05'],

  'pintu-gedung-kimia': ['kor-16', 'GEDUNG_KIMIA'],
  'GEDUNG_KIMIA': ['pintu-gedung-kimia'],

  // SHORTCUT GEDUNG 02 (MATEMATIKA) ↔ GEDUNG 06 (BILINGUAL)
  'pintu-gedung-02': ['kor-14', 'GEDUNG_02', 'pintu-gedung-06'],
  'GEDUNG_02': ['pintu-gedung-02', 'GEDUNG_06'],

  'pintu-gedung-06': ['kor-15', 'GEDUNG_06', 'pintu-gedung-02'],
  'GEDUNG_06': ['pintu-gedung-06', 'GEDUNG_02']
};

// EKSEKUSI PENULISAN FILE AUTOMATIS
const assetMapPath = path.join(process.cwd(), 'public', 'assets', 'map.svg');
const result = extractBuildingsAndWaypoints(assetMapPath);

if (result) {
  const allNodes = { ...result.gedung, ...result.waypoints };
  const generatedEdges = [];
  const processedPairs = new Set();

  Object.keys(rawConnections).forEach(from => {
    rawConnections[from].forEach(to => {
      const pairKey = [from, to].sort().join('--');
      if (!processedPairs.has(pairKey)) {
        processedPairs.add(pairKey);
        const nodeA = allNodes[from];
        const nodeB = allNodes[to];
        if (nodeA && nodeB) {
          generatedEdges.push({
            from,
            to,
            weight: getDistance(nodeA, nodeB)
          });
        }
      }
    });
  });

  const fileContent = `export const graphNodes = ${JSON.stringify(result, null, 2)};\n\nexport const graphData = {\n  nodes: {\n    ...graphNodes.gedung,\n    ...graphNodes.waypoints\n  },\n  edges: ${JSON.stringify(generatedEdges, null, 2)}\n};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src', 'js', 'data.js'), fileContent);
  console.log("\n[SUCCESS] Data nodes & edges berhasil ditulis otomatis ke src/js/data.js!");
}
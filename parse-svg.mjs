// parse-svg.mjs
import fs from 'fs';
import path from 'path';

function extractBuildingsAndWaypoints(svgFilePath) {
  if (!fs.existsSync(svgFilePath)) {
    console.error(`[ERROR] File map.svg tidak ditemukan di: ${svgFilePath}`);
    return null;
  }

  const svgData = fs.readFileSync(svgFilePath, 'utf8');

  // Pemetaan manual ID Gedung ke ID Pintunya agar koordinatnya 100% presisi & terpisah
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

  // Kamus label nama gedung untuk tampilan UI
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

  // 1. EXTRAKSI WAYPOINT KORIDOR & PINTU (<circle>)
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

  // 2. EKSTRAKSI KOORDINAT GEDUNG (DARI AKSES PINTU TERDEKAT & OTOMATIS LABEL)
  Object.keys(gedungToPintuMap).forEach(id => {
    const pintuId = gedungToPintuMap[id];
    const pintuNode = nodesResult.waypoints[pintuId];

    const keyName = id.toUpperCase().replace(/-/g, '_');

    if (pintuNode) {
      nodesResult.gedung[keyName] = {
        svgId: id,
        label: buildingLabels[id] || id,
        x: pintuNode.x,
        y: pintuNode.y,
        isBuilding: true
      };
    } else {
      console.warn(`[WARNING] Pintu untuk gedung '${id}' tidak ditemukan.`);
    }
  });

  console.log("\n=== HASIL EKSTRAKSI KOORDINAT UNTUK src/js/data.js ===");
  console.log(JSON.stringify(nodesResult, null, 2));

  return nodesResult;
}

const assetMapPath = path.join(process.cwd(), 'public', 'assets', 'map.svg');
const result = extractBuildingsAndWaypoints(assetMapPath);

if (result) {
  const fileContent = `export const graphNodes = ${JSON.stringify(result, null, 2)};\n\nexport const graphData = {\n  nodes: {\n    ...graphNodes.gedung,\n    ...graphNodes.waypoints\n  },\n  edges: []\n};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src', 'js', 'data.js'), fileContent);
  console.log("\n[SUCCESS] Data berhasil ditulis otomatis ke src/js/data.js!");
}
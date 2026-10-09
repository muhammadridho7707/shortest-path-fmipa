// parse-svg.mjs
import fs from 'fs';
import path from 'path';

function extractBuildingsAndWaypoints(svgFilePath) {
  if (!fs.existsSync(svgFilePath)) {
    console.error(`[ERROR] File map.svg tidak ditemukan di: ${svgFilePath}`);
    return;
  }

  const svgData = fs.readFileSync(svgFilePath, 'utf8');

  // 1. Target ID Gedung FMIPA
  const targetGedung = [
    'gedung-syawal-gultom', 'gedung-04', 'gedung-05', 'gedung-kimia',
    'gedung-02', 'gedung-06', 'gedung-12', 'gedung-lab-fisika',
    'gedung-09', 'gedung-lab-kimia', 'gedung-lab-biologi-barat', 'gedung-lab-biologi-timur'
  ];

  const nodesResult = {
    gedung: {},
    waypoints: {}
  };

  // --- EKSTRAKSI KOORDINAT GEDUNG ---
  targetGedung.forEach(id => {
    const regex = new RegExp(`<path[^>]*id="${id}-bentuk-1"[^>]*d="([^"]+)"`, 'i');
    const match = svgData.match(regex);

    if (match) {
      const dPath = match[1];
      const coords = dPath.match(/-?\d+(\.\d+)?/g);

      if (coords && coords.length >= 2) {
        const x = Math.round(parseFloat(coords[0]));
        const y = Math.round(parseFloat(coords[1]));

        const keyName = id.toUpperCase().replace(/-/g, '_');
        nodesResult.gedung[keyName] = {
          svgId: id,
          isBuilding: true
        };
      }
    } else {
      console.warn(`[WARNING] Gedung '${id}' tidak ditemukan di SVG.`);
    }
  });

  // --- EKSTRAKSI WAYPOINT KORIDOR & PINTU (<circle>) ---
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

  console.log("\n=== HASIL EKSTRAKSI KOORDINAT UNTUK src/js/data.js ===");
  console.log(JSON.stringify(nodesResult, null, 2));

  return nodesResult;
}

// Gunakan path string yang valid menuju public/assets/map.svg
const assetMapPath = path.join(process.cwd(), 'public', 'assets', 'map.svg');
generateGraphNodesFromSVG(assetMapPath);

// Tambahkan ini di baris paling bawah parse-svg.mjs
const result = generateGraphNodesFromSVG(assetMapPath);

if (result) {
  const fileContent = `export const graphNodes = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src', 'js', 'data.js'), fileContent);
  console.log("\n [SUCCESS] Data berhasil ditulis otomatis ke src/js/data.js!");
}

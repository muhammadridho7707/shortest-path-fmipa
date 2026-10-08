// parse-svg.mjs
import fs from 'fs';

function extractBuildingsAndWaypoints(svgFilePath) {
  if (!fs.existsSync(svgFilePath)) {
    console.log("File map.svg tidak ditemukan!");
    return;
  }

  const svgData = fs.readFileSync(svgFilePath, 'utf8');

  // 1. Ekstraksi Gedung FMIPA
  const targetGedung = [
    'gedung-syawal-gultom', 'gedung-04', 'gedung-05', 'gedung-kimia',
    'gedung-02', 'gedung-06', 'gedung-12', 'gedung-lab-fisika',
    'gedung-09', 'gedung-lab-kimia', 'gedung-lab-biologi-barat', 'gedung-lab-biologi-timur'
  ];

  const nodesResult = {};

  targetGedung.forEach(id => {
    const regex = new RegExp(`<path[^>]*id="${id}-bentuk-1"[^>]*d="([^"]+)"`, 'i');
    const match = svgData.match(regex);

    if (match) {
      const dPath = match[1];
      const coords = dPath.match(/-?\d+(\.\d+)?/g);
      
      if (coords && coords.length >= 2) {
        nodesResult[id.toUpperCase().replace(/-/g, '_')] = {
          name: id.replace(/-/g, ' ').toUpperCase(),
          category: "Gedung FMIPA",
          x: Math.round(parseFloat(coords[0])),
          y: Math.round(parseFloat(coords[1])),
          svgId: id,
          isBuilding: true
        };
      }
    }
  });

  // 2. Ekstraksi Semua Path Jalan / Setapak
  // Mengambil semua path di bawah layer-jalur-setapak atau id bertema jalur/jalan
  const pathRegex = /<path[^>]*id="([^"]+)"[^>]*d="([^"]+)"/g;
  let match;
  let wpCounter = 1;

  while ((match = pathRegex.exec(svgData)) !== null) {
    const id = match[1];
    const dPath = match[2];

    if (id.includes('jalur-setapak') || id.includes('jalan-kampus')) {
      const coords = dPath.match(/-?\d+(\.\d+)?/g);

      if (coords && coords.length >= 2) {
        const key = `WP_${id.toUpperCase().replace(/-/g, '_')}`;
        nodesResult[key] = {
          name: `Waypoint ${wpCounter++} (${id})`,
          category: "Jalan Setapak",
          x: Math.round(parseFloat(coords[0])),
          y: Math.round(parseFloat(coords[1])),
          svgId: id,
          isBuilding: false
        };
      }
    }
  }

  console.log("=== HASIL EKSTRAKSI GEDUNG & WAYPOINTS UNTUK src/js/data.js ===");
  console.log(JSON.stringify(nodesResult, null, 2));
}

extractBuildingsAndWaypoints('map.svg');
// parse-svg.mjs
import fs from 'fs';

function generateGraphNodesFromSVG(svgFilePath) {
  if (!fs.existsSync(svgFilePath)) {
    console.log("File map.svg tidak ditemukan!");
    return;
  }

  const svgData = fs.readFileSync(svgFilePath, 'utf8');

  // Daftar ID gedung FMIPA yang kita targetkan
  const targetGedung = [
    'gedung-syawal-gultom', 'gedung-04', 'gedung-05', 'gedung-kimia',
    'gedung-02', 'gedung-06', 'gedung-12', 'gedung-lab-fisika',
    'gedung-09', 'gedung-lab-kimia', 'gedung-lab-biologi-barat', 'gedung-lab-biologi-timur'
  ];

  const nodesResult = {};

  targetGedung.forEach(id => {
    // Cari path atau g terkait ID gedung ini
    const regex = new RegExp(`<path[^>]*id="${id}-bentuk-1"[^>]*d="([^"]+)"`, 'i');
    const match = svgData.match(regex);

    if (match) {
      const dPath = match[1];
      // Ekstraksemua angka koordinat dari atribut d="..."
      const coords = dPath.match(/-?\d+(\.\d+)?/g);
      
      if (coords && coords.length >= 2) {
        // Ambil sampel koordinat x dan y awal dari path
        const x = Math.round(parseFloat(coords[0]));
        const y = Math.round(parseFloat(coords[1]));

        nodesResult[id.toUpperCase().replace(/-/g, '_')] = {
          svgId: id,
          x: x,
          y: y
        };
      }
    }
  });

  console.log("=== HASIL EKSTRAKSI KOORDINAT UNTUK src/js/data.js ===");
  console.log(JSON.stringify(nodesResult, null, 2));
}

generateGraphNodesFromSVG('map.svg');
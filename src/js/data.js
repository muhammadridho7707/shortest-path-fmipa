export const graphData = {
  // 1. Daftar semua titik/ruangan beserta koordinatnya
  nodes: {
    "R_101": { name: "Ruang 101", floor: 1, x: 120, y: 300 },
    "KOR_A1": { name: "Koridor A1", floor: 1, x: 180, y: 300 },
    "TANGGA_L1": { name: "Tangga Utama L1", floor: 1, x: 300, y: 300 },
    "TANGGA_L2": { name: "Tangga Utama L2", floor: 2, x: 300, y: 300 },
    "R_201": { name: "Ruang 201", floor: 2, x: 420, y: 300 }
  },

  // 2. Daftar hubungan/jalur antar titik beserta bobot jaraknya
  edges: [
    { from: "R_101", to: "KOR_A1", weight: 60 },
    { from: "KOR_A1", to: "TANGGA_L1", weight: 120 },
    // Penalti beda lantai diset misalnya 200
    { from: "TANGGA_L1", to: "TANGGA_L2", weight: 200 }, 
    { from: "TANGGA_L2", to: "R_201", weight: 120 }
  ]
};
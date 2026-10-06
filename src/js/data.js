// src/js/data.js
import { calculateWeight } from './graph.js';

export const graphData = {
  // Metadata konversi skala peta (1 piksel SVG = 0.5 meter)
  config: {
    pixelToMeterScale: 0.5,
    svgWidth: 1920,
    svgHeight: 1080
  },

  // Daftar titik lokasi/gedung hasil ekstraksi real dari map.svg
  nodes: {
    GEDUNG_SYAWAL_GULTOM: { name: "Gedung Syawal Gultom", category: "Gedung Utama", x: 1056, y: 534, svgId: "gedung-syawal-gultom" },
    GEDUNG_04: { name: "Gedung Fisika (04)", category: "Gedung Perkuliahan", x: 1072, y: 446, svgId: "gedung-04" },
    GEDUNG_05: { name: "Gedung Biologi (05)", category: "Gedung Perkuliahan", x: 1222, y: 450, svgId: "gedung-05" },
    GEDUNG_KIMIA: { name: "Gedung Kimia", category: "Gedung Perkuliahan", x: 1072, y: 596, svgId: "gedung-kimia" },
    GEDUNG_02: { name: "Gedung Matematika (02)", category: "Gedung Perkuliahan", x: 1196, y: 610, svgId: "gedung-02" },
    GEDUNG_06: { name: "Gedung Bilingual (06)", category: "Gedung Perkuliahan", x: 1052, y: 690, svgId: "gedung-06" },
    GEDUNG_12: { name: "Gedung Bersama (12)", category: "Gedung Perkuliahan", x: 670, y: 411, svgId: "gedung-12" },
    GEDUNG_LAB_FISIKA: { name: "Lab Fisika", category: "Laboratorium", x: 876, y: 393, svgId: "gedung-lab-fisika" },
    GEDUNG_09: { name: "Lab Komputer (09)", category: "Laboratorium", x: 712, y: 684, svgId: "gedung-09" },
    GEDUNG_LAB_KIMIA: { name: "Lab Kimia", category: "Laboratorium", x: 879, y: 632, svgId: "gedung-lab-kimia" },
    GEDUNG_LAB_BIOLOGI_BARAT: { name: "Lab Biologi Barat", category: "Laboratorium", x: 665, y: 740, svgId: "gedung-lab-biologi-barat" },
    GEDUNG_LAB_BIOLOGI_TIMUR: { name: "Lab Biologi Timur", category: "Laboratorium", x: 672, y: 584, svgId: "gedung-lab-biologi-timur" }
  },

  // Jalur keterhubungan antar gedung (Edges) beserta perhitungan bobot meter otomatis
  edges: [
    // Rute dari Gedung Syawal Gultom (Pusat)
    { from: "GEDUNG_SYAWAL_GULTOM", to: "GEDUNG_04", weight: calculateWeight(1056, 534, 1072, 446) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "GEDUNG_05", weight: calculateWeight(1056, 534, 1222, 450) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "GEDUNG_KIMIA", weight: calculateWeight(1056, 534, 1072, 596) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "GEDUNG_02", weight: calculateWeight(1056, 534, 1196, 610) },

    // Rute antar Gedung FMIPA
    { from: "GEDUNG_04", to: "GEDUNG_05", weight: calculateWeight(1072, 446, 1222, 450) },
    { from: "GEDUNG_KIMIA", to: "GEDUNG_02", weight: calculateWeight(1072, 596, 1196, 610) },
    { from: "GEDUNG_KIMIA", to: "GEDUNG_06", weight: calculateWeight(1072, 596, 1052, 690) },

    // Rute ke Kompleks Lab & Gedung Bersama
    { from: "GEDUNG_KIMIA", to: "GEDUNG_LAB_KIMIA", weight: calculateWeight(1072, 596, 879, 632) },
    { from: "GEDUNG_LAB_KIMIA", to: "GEDUNG_LAB_FISIKA", weight: calculateWeight(879, 632, 876, 393) },
    { from: "GEDUNG_LAB_FISIKA", to: "GEDUNG_12", weight: calculateWeight(876, 393, 670, 411) },
    { from: "GEDUNG_LAB_KIMIA", to: "GEDUNG_09", weight: calculateWeight(879, 632, 712, 684) },
    { from: "GEDUNG_09", to: "GEDUNG_LAB_BIOLOGI_BARAT", weight: calculateWeight(712, 684, 665, 740) },
    { from: "GEDUNG_LAB_BIOLOGI_BARAT", to: "GEDUNG_LAB_BIOLOGI_TIMUR", weight: calculateWeight(665, 740, 672, 584) },
    { from: "GEDUNG_LAB_BIOLOGI_TIMUR", to: "GEDUNG_12", weight: calculateWeight(672, 584, 670, 411) }
  ]
};
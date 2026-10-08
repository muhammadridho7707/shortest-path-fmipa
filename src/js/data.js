// src/js/data.js
import { calculateWeight } from './graph.js';

export const graphData = {
  config: {
    pixelToMeterScale: 0.5,
    svgWidth: 1920,
    svgHeight: 1080
  },

  nodes: {
    // === GEDUNG FMIPA (ENTRIES UTAMA) ===
    GEDUNG_SYAWAL_GULTOM: { name: "Gedung Syawal Gultom", category: "Gedung Utama", x: 1056, y: 534, svgId: "gedung-syawal-gultom", isBuilding: true },
    GEDUNG_04: { name: "Gedung Fisika (04)", category: "Gedung Perkuliahan", x: 1072, y: 446, svgId: "gedung-04", isBuilding: true },
    GEDUNG_05: { name: "Gedung Biologi (05)", category: "Gedung Perkuliahan", x: 1222, y: 450, svgId: "gedung-05", isBuilding: true },
    GEDUNG_KIMIA: { name: "Gedung Kimia", category: "Gedung Perkuliahan", x: 1072, y: 596, svgId: "gedung-kimia", isBuilding: true },
    GEDUNG_02: { name: "Gedung Matematika (02)", category: "Gedung Perkuliahan", x: 1196, y: 610, svgId: "gedung-02", isBuilding: true },
    GEDUNG_06: { name: "Gedung Bilingual (06)", category: "Gedung Perkuliahan", x: 1052, y: 690, svgId: "gedung-06", isBuilding: true },
    GEDUNG_12: { name: "Gedung Bersama (12)", category: "Gedung Perkuliahan", x: 670, y: 411, svgId: "gedung-12", isBuilding: true },
    GEDUNG_LAB_FISIKA: { name: "Lab Fisika", category: "Laboratorium", x: 876, y: 393, svgId: "gedung-lab-fisika", isBuilding: true },
    GEDUNG_09: { name: "Lab Komputer (09)", category: "Laboratorium", x: 712, y: 684, svgId: "gedung-09", isBuilding: true },
    GEDUNG_LAB_KIMIA: { name: "Lab Kimia", category: "Laboratorium", x: 879, y: 632, svgId: "gedung-lab-kimia", isBuilding: true },
    GEDUNG_LAB_BIOLOGI_BARAT: { name: "Lab Biologi Barat", category: "Laboratorium", x: 665, y: 740, svgId: "gedung-lab-biologi-barat", isBuilding: true },
    GEDUNG_LAB_BIOLOGI_TIMUR: { name: "Lab Biologi Timur", category: "Laboratorium", x: 672, y: 584, svgId: "gedung-lab-biologi-timur", isBuilding: true },

    // === PINTU AKSES KELUAR-MASUK SYAWAL GULTOM ===
    SYAWAL_PINTU_UTARA: { name: "Pintu Utara Syawal Gultom", category: "Akses Gedung", x: 1056, y: 470, isBuilding: false },
    SYAWAL_PINTU_TIMUR: { name: "Pintu Timur Syawal Gultom", category: "Akses Gedung", x: 1110, y: 534, isBuilding: false },
    SYAWAL_PINTU_SELATAN: { name: "Pintu Selatan Syawal Gultom", category: "Akses Gedung", x: 1056, y: 590, isBuilding: false },
    SYAWAL_PINTU_BARAT: { name: "Pintu Barat Syawal Gultom", category: "Akses Gedung", x: 1000, y: 534, isBuilding: false },

    // === BASEMENT PARKIRAN BARAT DAYA SYAWAL ===
    PARKIR_BASEMENT_SYAWAL: { name: "Basement Parkir Syawal", category: "Fasilitas Parkir", x: 1010, y: 575, isBuilding: false },

    // === WAYPOINTS PERSIMPANGAN JALAN SETAPAK ===
    WP_JALAN_KAMPUS_08: { name: "Simpang Jalan 08", category: "Jalan Setapak", x: 820, y: 50, isBuilding: false },
    WP_JALAN_KAMPUS_09: { name: "Simpang Jalan 09", category: "Jalan Setapak", x: 968, y: 56, isBuilding: false },
    WP_JALAN_KAMPUS_10: { name: "Simpang Jalan 10", category: "Jalan Setapak", x: 968, y: 328, isBuilding: false },
    WP_JALAN_KAMPUS_18: { name: "Simpang Jalan 18", category: "Jalan Setapak", x: 1476, y: 350, isBuilding: false },
    WP_JALAN_KAMPUS_19: { name: "Simpang Jalan 19", category: "Jalan Setapak", x: 1474, y: 390, isBuilding: false },
    WP_JALAN_KAMPUS_20: { name: "Simpang Jalan 20", category: "Jalan Setapak", x: 1384, y: 494, isBuilding: false },
    WP_JALAN_KAMPUS_21: { name: "Simpang Jalan 21", category: "Jalan Setapak", x: 1382, y: 604, isBuilding: false },
    WP_JALAN_KAMPUS_23: { name: "Simpang Jalan 23", category: "Jalan Setapak", x: 1384, y: 680, isBuilding: false },
    WP_JALUR_SETAPAK_1: { name: "Jalur Setapak 1", category: "Jalan Setapak", x: 1112, y: 670, isBuilding: false },
    WP_JALUR_SETAPAK_2: { name: "Jalur Setapak 2", category: "Jalan Setapak", x: 1166, y: 660, isBuilding: false },
    WP_JALUR_SETAPAK_3: { name: "Jalur Setapak 3", category: "Jalan Setapak", x: 1228, y: 692, isBuilding: false },
    WP_JALUR_SETAPAK_4: { name: "Jalur Setapak 4", category: "Jalan Setapak", x: 1250, y: 670, isBuilding: false }
  },

  edges: [
    // 1. PINTU UTAMA SYAWAL KE PINTU-PINTU AKSESNYA
    { from: "GEDUNG_SYAWAL_GULTOM", to: "SYAWAL_PINTU_UTARA", weight: calculateWeight(1056, 534, 1056, 470) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "SYAWAL_PINTU_TIMUR", weight: calculateWeight(1056, 534, 1110, 534) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "SYAWAL_PINTU_SELATAN", weight: calculateWeight(1056, 534, 1056, 590) },
    { from: "GEDUNG_SYAWAL_GULTOM", to: "SYAWAL_PINTU_BARAT", weight: calculateWeight(1056, 534, 1000, 534) },

    // 2. BASEMENT PARKIRAN BARAT DAYA SYAWAL
    { from: "PARKIR_BASEMENT_SYAWAL", to: "SYAWAL_PINTU_BARAT", weight: calculateWeight(1010, 575, 1000, 534) },
    { from: "PARKIR_BASEMENT_SYAWAL", to: "SYAWAL_PINTU_SELATAN", weight: calculateWeight(1010, 575, 1056, 590) },
    { from: "GEDUNG_KIMIA", to: "PARKIR_BASEMENT_SYAWAL", weight: calculateWeight(1072, 596, 1010, 575) },

    // 3. JALUR UTARA & DEPAN
    { from: "SYAWAL_PINTU_UTARA", to: "WP_JALAN_KAMPUS_10", weight: calculateWeight(1056, 470, 968, 328) },
    { from: "GEDUNG_04", to: "WP_JALAN_KAMPUS_10", weight: calculateWeight(1072, 446, 968, 328) },
    { from: "WP_JALAN_KAMPUS_10", to: "WP_JALAN_KAMPUS_09", weight: calculateWeight(968, 328, 968, 56) },
    { from: "WP_JALAN_KAMPUS_09", to: "WP_JALAN_KAMPUS_08", weight: calculateWeight(968, 56, 820, 50) },

    // 4. JALUR TIMUR (BIOLOGI & MATEMATIKA)
    { from: "SYAWAL_PINTU_TIMUR", to: "WP_JALAN_KAMPUS_20", weight: calculateWeight(1110, 534, 1384, 494) },
    { from: "WP_JALAN_KAMPUS_10", to: "WP_JALAN_KAMPUS_20", weight: calculateWeight(968, 328, 1384, 494) },
    { from: "GEDUNG_05", to: "WP_JALAN_KAMPUS_20", weight: calculateWeight(1222, 450, 1384, 494) },
    { from: "WP_JALAN_KAMPUS_20", to: "WP_JALAN_KAMPUS_19", weight: calculateWeight(1384, 494, 1474, 390) },
    { from: "WP_JALAN_KAMPUS_19", to: "WP_JALAN_KAMPUS_18", weight: calculateWeight(1474, 390, 1476, 350) },
    { from: "WP_JALAN_KAMPUS_20", to: "WP_JALAN_KAMPUS_21", weight: calculateWeight(1384, 494, 1382, 604) },
    { from: "GEDUNG_02", to: "WP_JALAN_KAMPUS_21", weight: calculateWeight(1196, 610, 1382, 604) },
    { from: "WP_JALAN_KAMPUS_21", to: "WP_JALAN_KAMPUS_23", weight: calculateWeight(1382, 604, 1384, 680) },

    // 5. JALUR SELATAN (KIMIA & BILINGUAL)
    { from: "SYAWAL_PINTU_SELATAN", to: "GEDUNG_KIMIA", weight: calculateWeight(1056, 590, 1072, 596) },
    { from: "GEDUNG_KIMIA", to: "WP_JALUR_SETAPAK_1", weight: calculateWeight(1072, 596, 1112, 670) },
    { from: "WP_JALUR_SETAPAK_1", to: "GEDUNG_06", weight: calculateWeight(1112, 670, 1052, 690) },
    { from: "WP_JALUR_SETAPAK_1", to: "WP_JALUR_SETAPAK_2", weight: calculateWeight(1112, 670, 1166, 660) },
    { from: "WP_JALUR_SETAPAK_2", to: "WP_JALUR_SETAPAK_3", weight: calculateWeight(1166, 660, 1228, 692) },
    { from: "WP_JALUR_SETAPAK_3", to: "WP_JALUR_SETAPAK_4", weight: calculateWeight(1228, 692, 1250, 670) },

    // 6. JALUR KOMPLEKS LABORATORIUM & GEDUNG 12
    { from: "PARKIR_BASEMENT_SYAWAL", to: "GEDUNG_LAB_KIMIA", weight: calculateWeight(1010, 575, 879, 632) },
    { from: "GEDUNG_LAB_KIMIA", to: "GEDUNG_LAB_FISIKA", weight: calculateWeight(879, 632, 876, 393) },
    { from: "GEDUNG_LAB_FISIKA", to: "GEDUNG_12", weight: calculateWeight(876, 393, 670, 411) },
    { from: "GEDUNG_LAB_KIMIA", to: "GEDUNG_09", weight: calculateWeight(879, 632, 712, 684) },
    { from: "GEDUNG_09", to: "GEDUNG_LAB_BIOLOGI_BARAT", weight: calculateWeight(712, 684, 665, 740) },
    { from: "GEDUNG_LAB_BIOLOGI_BARAT", to: "GEDUNG_LAB_BIOLOGI_TIMUR", weight: calculateWeight(665, 740, 672, 584) },
    { from: "GEDUNG_LAB_BIOLOGI_TIMUR", to: "GEDUNG_12", weight: calculateWeight(672, 584, 670, 411) }
  ]
};
/**
 * ============================================================================
 * DATA RUANGAN GEDUNG FMIPA
 * File Sumber: DATA RUANGAN GEDUNG FMIPA.xlsx
 * ============================================================================
 * Ringkasan Data:
 * - Total Gedung : 12 Gedung
 * - Total Ruangan: 672 Ruangan / Fasilitas
 *
 * Daftar 12 Gedung:
 * 1.  [001] Gedung Syawal (4 Lantai, 38 Ruangan)
 * 2.  [002] Gedung Matematika (8 Lantai, 98 Ruangan)
 * 3.  [003] Gedung Kimia (10 Lantai, 113 Ruangan)
 * 4.  [004] Gedung Fisika (8 Lantai, 96 Ruangan)
 * 5.  [005] Gedung Biologi (10 Lantai, 99 Ruangan)
 * 6.  [006] Gedung Bilingual (2 Lantai, 21 Ruangan)
 * 7.  [007] Gedung Lab Kimia (3 Lantai, 34 Ruangan)
 * 8.  [008] Gedung Lab Fisika (4 Lantai, 46 Ruangan)
 * 9.  [009] Gedung Lab Komputer (3 Lantai, 25 Ruangan)
 * 10. [010] Gedung Lab Biologi (3 Lantai, 24 Ruangan)
 * 11. [011] Gedung Lab Bio (4 Lantai, 47 Ruangan)
 * 12. [012] Gedung Bersama 12 (2 Lantai, 31 Ruangan)
 *
 * Panduan Penggunaan di Web Peta:
 * 1. Menggunakan ES Module (Vite / Webpack / React / Vue / script type="module"):
 *    import dataRuangan, { daftarGedung, dataGedung, cariRuangan } from './dataruangan.js';
 *
 * 2. Menggunakan Tag Script HTML Biasa:
 *    <script type="module" src="dataruangan.js"></script>
 *    // Nilai otomatis terpasang di window.dataRuangan, window.daftarGedung, window.dataGedung
 *
 * 3. Menggunakan Node.js / CommonJS:
 *    const { dataRuangan, daftarGedung } = require('./dataruangan.js');
 * ============================================================================
 */

/**
 * Metadata 12 Gedung FMIPA
 */
export const daftarGedung = [
  {
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "namaSingkat": "Syawal",
    "sheetName": "001 Syawal",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 38,
    "koordinat": null
  },
  {
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "namaSingkat": "Matematika",
    "sheetName": "002 Matematika",
    "totalLantai": 8,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalRuangan": 98,
    "koordinat": null
  },
  {
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "namaSingkat": "Kimia",
    "sheetName": "003 Kimia",
    "totalLantai": 10,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalRuangan": 113,
    "koordinat": null
  },
  {
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "namaSingkat": "Fisika",
    "sheetName": "004 Fisika",
    "totalLantai": 8,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalRuangan": 96,
    "koordinat": null
  },
  {
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "namaSingkat": "Biologi",
    "sheetName": "005 Biologi",
    "totalLantai": 10,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalRuangan": 99,
    "koordinat": null
  },
  {
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "namaSingkat": "Bilingual",
    "sheetName": "006 Bilingual",
    "totalLantai": 2,
    "daftarLantai": [
      1,
      2
    ],
    "totalRuangan": 21,
    "koordinat": null
  },
  {
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "namaSingkat": "Lab Kimia",
    "sheetName": "007 Lab Kimia",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 34,
    "koordinat": null
  },
  {
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "namaSingkat": "Lab Fisika",
    "sheetName": "008 Lab Fisika",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 46,
    "koordinat": null
  },
  {
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "namaSingkat": "Lab Komputer",
    "sheetName": "009 Lab Komputer",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 25,
    "koordinat": null
  },
  {
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "namaSingkat": "Lab Biologi",
    "sheetName": "010 Lab Biologi",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 24,
    "koordinat": null
  },
  {
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "namaSingkat": "Lab Bio",
    "sheetName": "011 Lab Bio",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 47,
    "koordinat": null
  },
  {
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "namaSingkat": "Bersama 12",
    "sheetName": "012 Bersama 12",
    "totalLantai": 2,
    "daftarLantai": [
      1,
      2
    ],
    "totalRuangan": 31,
    "koordinat": null
  }
];

/**
 * Data Lengkap Ruangan FMIPA (672 Ruangan)
 */
export const dataRuangan = [
  {
    "id": 1,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "001.1.01",
    "namaRuangan": "Ruang Informasi",
    "koordinat": null
  },
  {
    "id": 2,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "001.1.03",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 3,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "001.1.04",
    "namaRuangan": "Toilet Disabilitas",
    "koordinat": null
  },
  {
    "id": 4,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "001.1.05",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 5,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "001.1.06",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 6,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "001.1.07",
    "namaRuangan": "Gudang Inventaris",
    "koordinat": null
  },
  {
    "id": 7,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "001.1.10",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 8,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "001.1.11",
    "namaRuangan": "Ruang Pelayanan BMN",
    "koordinat": null
  },
  {
    "id": 9,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "001.1.xx",
    "namaRuangan": "Ruang Arsip",
    "koordinat": null
  },
  {
    "id": 10,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "001.1.xx",
    "namaRuangan": "Pintu Khusus Pegawai/Dosen",
    "koordinat": null
  },
  {
    "id": 11,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "001.1",
    "namaRuangan": "Lift Sebelah Utara",
    "koordinat": null
  },
  {
    "id": 12,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "001.2.02",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 13,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "001.2.03",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 14,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "001.2.04",
    "namaRuangan": "Toilet Disabilitas",
    "koordinat": null
  },
  {
    "id": 15,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "001.2.05",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 16,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "001.2.06",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 17,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "001.2.08",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 18,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "001.2.09",
    "namaRuangan": "Ruang Wudhu Pria",
    "koordinat": null
  },
  {
    "id": 19,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "001.2.10",
    "namaRuangan": "Ruang Wudhu Wanita",
    "koordinat": null
  },
  {
    "id": 20,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "001.2.12",
    "namaRuangan": "Ruang Guru Besar",
    "koordinat": null
  },
  {
    "id": 21,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": "xx",
    "kodeRuangan": "001.2.xx",
    "namaRuangan": "Ruang BKD",
    "koordinat": null
  },
  {
    "id": 22,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": "xx",
    "kodeRuangan": "001.2.xx",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 23,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "001.2",
    "namaRuangan": "Lift Sebelah Utara",
    "koordinat": null
  },
  {
    "id": 24,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "001.3.01",
    "namaRuangan": "Ruang Aula A",
    "koordinat": null
  },
  {
    "id": 25,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "001.3.03",
    "namaRuangan": "Panel",
    "koordinat": null
  },
  {
    "id": 26,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "001.3.04",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 27,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "001.3.05",
    "namaRuangan": "Toilet Disabilitas",
    "koordinat": null
  },
  {
    "id": 28,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "001.3.06",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 29,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "001.3.07",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 30,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "001.3.10",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 31,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 12,
    "kodeRuangan": "001.3.12",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 32,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": 13,
    "kodeRuangan": "001.3.13",
    "namaRuangan": "Ruang Aula D",
    "koordinat": null
  },
  {
    "id": 33,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": "xx",
    "kodeRuangan": "001.3.xx",
    "namaRuangan": "Aula B",
    "koordinat": null
  },
  {
    "id": 34,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": "xx",
    "kodeRuangan": "001.3.xx",
    "namaRuangan": "Aula C",
    "koordinat": null
  },
  {
    "id": 35,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": "xx",
    "kodeRuangan": "001.3.xx",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 36,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "001.3",
    "namaRuangan": "Hall",
    "koordinat": null
  },
  {
    "id": 37,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "001.3",
    "namaRuangan": "Lift Sebelah Selatan",
    "koordinat": null
  },
  {
    "id": 38,
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "lantai": 4,
    "ruangan": null,
    "kodeRuangan": "001.4",
    "namaRuangan": "Roof Top",
    "koordinat": null
  },
  {
    "id": 39,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "002.1.01",
    "namaRuangan": "Ruang Administrasi Jurusan",
    "koordinat": null
  },
  {
    "id": 40,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "002.1.02",
    "namaRuangan": "Ruang Tunggu",
    "koordinat": null
  },
  {
    "id": 41,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "002.1.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 42,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "002.1.04",
    "namaRuangan": "Kamar Mandi Perempuan",
    "koordinat": null
  },
  {
    "id": 43,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "002.1.05",
    "namaRuangan": "Kamar Mandi Laki-laki",
    "koordinat": null
  },
  {
    "id": 44,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "002.1.06",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 45,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "002.1.07",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 46,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "002.1.08",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 47,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "002.1.09",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 48,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "002.1.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 49,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "002.1.11",
    "namaRuangan": "Ruang Ketua Kaprodi Matematika",
    "koordinat": null
  },
  {
    "id": 50,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 12,
    "kodeRuangan": "002.1.12",
    "namaRuangan": "Ruang Ketua Pendidikan Matematika",
    "koordinat": null
  },
  {
    "id": 51,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 13,
    "kodeRuangan": "002.1.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 52,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "002.1.14",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 53,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "002.2.01",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 54,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "002.2.02",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 55,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "002.2.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 56,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "002.2.04",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 57,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "002.2.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 58,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "002.2.06",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 59,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "002.2.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 60,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "002.2.08",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 61,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "002.2.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 62,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "002.2.10",
    "namaRuangan": "Ruang Akreditasi",
    "koordinat": null
  },
  {
    "id": 63,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "002.3.01",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 64,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "002.3.02",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 65,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "002.3.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 66,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "002.3.04",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 67,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "002.3.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 68,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "002.3.06",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 69,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "002.3.07",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 70,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "002.3.08",
    "namaRuangan": "Panel",
    "koordinat": null
  },
  {
    "id": 71,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "002.3.09",
    "namaRuangan": "Ruang Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 72,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "002.3.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 73,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "002.3.11",
    "namaRuangan": "Ruang Ujian",
    "koordinat": null
  },
  {
    "id": 74,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 12,
    "kodeRuangan": "002.3.12",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 75,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 3,
    "ruangan": 13,
    "kodeRuangan": "002.3.13",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 76,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "002.4.01",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 77,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "002.4.02",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 78,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 3,
    "kodeRuangan": "002.4.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 79,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "002.4.04",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 80,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "002.4.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 81,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "002.4.06",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 82,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 7,
    "kodeRuangan": "002.4.07",
    "namaRuangan": "Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 83,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 8,
    "kodeRuangan": "002.4.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 84,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "002.4.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 85,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 10,
    "kodeRuangan": "002.4.10",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 86,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 11,
    "kodeRuangan": "002.4.11",
    "namaRuangan": "Ruang Penguji",
    "koordinat": null
  },
  {
    "id": 87,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 12,
    "kodeRuangan": "002.4.12",
    "namaRuangan": "Ruang Mikroteaching",
    "koordinat": null
  },
  {
    "id": 88,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 13,
    "kodeRuangan": "002.4.13",
    "namaRuangan": "Ruang Microteaching",
    "koordinat": null
  },
  {
    "id": 89,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 14,
    "kodeRuangan": "002.4.14",
    "namaRuangan": "Ruang Penguji",
    "koordinat": null
  },
  {
    "id": 90,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 15,
    "kodeRuangan": "002.4.15",
    "namaRuangan": "Ruang Penguji",
    "koordinat": null
  },
  {
    "id": 91,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 16,
    "kodeRuangan": "002.4.16",
    "namaRuangan": "Ruang Microteaching",
    "koordinat": null
  },
  {
    "id": 92,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 17,
    "kodeRuangan": "002.4.17",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 93,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 4,
    "ruangan": 18,
    "kodeRuangan": "002.4.18",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 94,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 1,
    "kodeRuangan": "002.5.01",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 95,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 2,
    "kodeRuangan": "002.5.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 96,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 3,
    "kodeRuangan": "002.5.03",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 97,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 4,
    "kodeRuangan": "002.5.04",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 98,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 5,
    "kodeRuangan": "002.5.05",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 99,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 6,
    "kodeRuangan": "002.5.06",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 100,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 7,
    "kodeRuangan": "002.5.07",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 101,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 8,
    "kodeRuangan": "002.5.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 102,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 9,
    "kodeRuangan": "002.5.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 103,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 10,
    "kodeRuangan": "002.5.10",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 104,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 11,
    "kodeRuangan": "002.5.11",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 105,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 12,
    "kodeRuangan": "002.5.12",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 106,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 5,
    "ruangan": 13,
    "kodeRuangan": "002.5.13",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 107,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 1,
    "kodeRuangan": "002.6.01",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 108,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 2,
    "kodeRuangan": "002.6.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 109,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 3,
    "kodeRuangan": "002.6.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 110,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 4,
    "kodeRuangan": "002.6.04",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 111,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 5,
    "kodeRuangan": "002.6.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 112,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 6,
    "kodeRuangan": "002.6.06",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 113,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 7,
    "kodeRuangan": "002.6.07",
    "namaRuangan": "Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 114,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 8,
    "kodeRuangan": "002.6.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 115,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 9,
    "kodeRuangan": "002.6.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 116,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 10,
    "kodeRuangan": "002.6.10",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 117,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 11,
    "kodeRuangan": "002.6.11",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 118,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 12,
    "kodeRuangan": "002.6.12",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 119,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 13,
    "kodeRuangan": "002.6.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 120,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 6,
    "ruangan": 14,
    "kodeRuangan": "002.6.14",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 121,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 1,
    "kodeRuangan": "002.7.01",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 122,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 2,
    "kodeRuangan": "002.7.02",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 123,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 3,
    "kodeRuangan": "002.7.03",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 124,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 4,
    "kodeRuangan": "002.7.04",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 125,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 5,
    "kodeRuangan": "002.7.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 126,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 6,
    "kodeRuangan": "002.7.06",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 127,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 7,
    "kodeRuangan": "002.7.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 128,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 8,
    "kodeRuangan": "002.7.08",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 129,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 9,
    "kodeRuangan": "002.7.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 130,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 10,
    "kodeRuangan": "002.7.10",
    "namaRuangan": "Ruang Baca",
    "koordinat": null
  },
  {
    "id": 131,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 11,
    "kodeRuangan": "002.7.11",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 132,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 7,
    "ruangan": 12,
    "kodeRuangan": "002.7.12",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 133,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 8,
    "ruangan": 1,
    "kodeRuangan": "002.8.01",
    "namaRuangan": "Ruang Himpunan Mahasiswa Jurusan",
    "koordinat": null
  },
  {
    "id": 134,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 8,
    "ruangan": 2,
    "kodeRuangan": "002.8.02",
    "namaRuangan": "Koridor (ditutup)",
    "koordinat": null
  },
  {
    "id": 135,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 8,
    "ruangan": 14,
    "kodeRuangan": "002.8.14",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 136,
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "lantai": 8,
    "ruangan": 15,
    "kodeRuangan": "002.8.15",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 137,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "003.1.01",
    "namaRuangan": "Ruang Administrasi Jurusan",
    "koordinat": null
  },
  {
    "id": 138,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "003.1.02",
    "namaRuangan": "Ruang Tunggu",
    "koordinat": null
  },
  {
    "id": 139,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "003.1.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 140,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "003.1.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 141,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "003.1.05",
    "namaRuangan": "Toilet Dosen A",
    "koordinat": null
  },
  {
    "id": 142,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "003.1.06",
    "namaRuangan": "Toilet Dosen B",
    "koordinat": null
  },
  {
    "id": 143,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "003.1.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 144,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "003.1.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 145,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "003.1.09",
    "namaRuangan": "Ruang Control",
    "koordinat": null
  },
  {
    "id": 146,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "003.1.10",
    "namaRuangan": "Ruang Kepala Lab Kimia",
    "koordinat": null
  },
  {
    "id": 147,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "003.1.11",
    "namaRuangan": "Ruang Ketua Prodi Kimia",
    "koordinat": null
  },
  {
    "id": 148,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 12,
    "kodeRuangan": "003.1.12",
    "namaRuangan": "Ruang Ketua Prodi Pendidikan Kimia",
    "koordinat": null
  },
  {
    "id": 149,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 13,
    "kodeRuangan": "003.1.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 150,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "003.1.14",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 151,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": 15,
    "kodeRuangan": "003.1.15",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 152,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "003.1",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 153,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "003.2.01",
    "namaRuangan": "Ruang Penguji A",
    "koordinat": null
  },
  {
    "id": 154,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "003.2.02",
    "namaRuangan": "Ruang Micro Teaching A",
    "koordinat": null
  },
  {
    "id": 155,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "003.2.03",
    "namaRuangan": "Ruang Mikroteaching B",
    "koordinat": null
  },
  {
    "id": 156,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "003.2.04",
    "namaRuangan": "Ruang Penguji B",
    "koordinat": null
  },
  {
    "id": 157,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "003.2.05",
    "namaRuangan": "Ruang Penguji C",
    "koordinat": null
  },
  {
    "id": 158,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "003.2.06",
    "namaRuangan": "Ruang Microteaching C",
    "koordinat": null
  },
  {
    "id": 159,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "003.2.07",
    "namaRuangan": "Ruang Ketua Prodi S2 Kimia",
    "koordinat": null
  },
  {
    "id": 160,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "003.2.08",
    "namaRuangan": "Ruang Ketua Prodi S2 Pendidikan Kimia",
    "koordinat": null
  },
  {
    "id": 161,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "003.2.09",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 162,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "003.2.10",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 163,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "003.2.11",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 164,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "003.2.12",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 165,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 13,
    "kodeRuangan": "003.2.13",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 166,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 14,
    "kodeRuangan": "003.2.14",
    "namaRuangan": "Ruang Rapat Jurusan",
    "koordinat": null
  },
  {
    "id": 167,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 15,
    "kodeRuangan": "003.2.15",
    "namaRuangan": "Ruang Penguji D",
    "koordinat": null
  },
  {
    "id": 168,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 16,
    "kodeRuangan": "003.2.16",
    "namaRuangan": "Ruang Microteaching D",
    "koordinat": null
  },
  {
    "id": 169,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 17,
    "kodeRuangan": "003.2.17",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 170,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 18,
    "kodeRuangan": "003.2.18",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 171,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": 19,
    "kodeRuangan": "003.2.19",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 172,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "003.2",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 173,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "003.3.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 174,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "003.3.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 175,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "003.3.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 176,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "003.3.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 177,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "003.3.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 178,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "003.3.07",
    "namaRuangan": "Toilet Difabel",
    "koordinat": null
  },
  {
    "id": 179,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "003.3.08",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 180,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "003.3.09",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 181,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "003.3.10",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 182,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "003.3.11",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 183,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "003.3",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 184,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "003.4.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 185,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "003.4.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 186,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 3,
    "kodeRuangan": "003.4.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 187,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "003.4.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 188,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "003.4.05",
    "namaRuangan": "Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 189,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "003.4.06",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 190,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 7,
    "kodeRuangan": "003.4.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 191,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 8,
    "kodeRuangan": "003.4.08",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 192,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "003.4.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 193,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": 10,
    "kodeRuangan": "003.4.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 194,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": null,
    "kodeRuangan": "003.4",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 195,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 4,
    "ruangan": null,
    "kodeRuangan": "003.4",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 196,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 1,
    "kodeRuangan": "003.5.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 197,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 2,
    "kodeRuangan": "003.5.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 198,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 3,
    "kodeRuangan": "003.5.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 199,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 4,
    "kodeRuangan": "003.5.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 200,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 5,
    "kodeRuangan": "003.5.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 201,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 6,
    "kodeRuangan": "003.5.06",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 202,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 7,
    "kodeRuangan": "003.5.07",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 203,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 8,
    "kodeRuangan": "003.5.08",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 204,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 9,
    "kodeRuangan": "003.5.09",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 205,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 10,
    "kodeRuangan": "003.5.10",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 206,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": 11,
    "kodeRuangan": "003.5.11",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 207,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 5,
    "ruangan": null,
    "kodeRuangan": "003.5",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 208,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 1,
    "kodeRuangan": "003.6.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 209,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 2,
    "kodeRuangan": "003.6.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 210,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 3,
    "kodeRuangan": "003.6.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 211,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 4,
    "kodeRuangan": "003.6.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 212,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 5,
    "kodeRuangan": "003.6.05",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 213,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 6,
    "kodeRuangan": "003.6.06",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 214,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 7,
    "kodeRuangan": "003.6.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 215,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 8,
    "kodeRuangan": "003.6.08",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 216,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 9,
    "kodeRuangan": "003.6.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 217,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": 10,
    "kodeRuangan": "003.6.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 218,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 6,
    "ruangan": null,
    "kodeRuangan": "003.6",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 219,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 1,
    "kodeRuangan": "003.7.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 220,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 2,
    "kodeRuangan": "003.7.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 221,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 3,
    "kodeRuangan": "003.7.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 222,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 4,
    "kodeRuangan": "003.7.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 223,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 5,
    "kodeRuangan": "003.7.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 224,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 6,
    "kodeRuangan": "003.7.06",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 225,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 7,
    "kodeRuangan": "003.7.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 226,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 8,
    "kodeRuangan": "003.7.08",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 227,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 9,
    "kodeRuangan": "003.7.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 228,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": 10,
    "kodeRuangan": "003.7.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 229,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": "xx",
    "kodeRuangan": "003.7.xx",
    "namaRuangan": "Ruang Janitor",
    "koordinat": null
  },
  {
    "id": 230,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 7,
    "ruangan": null,
    "kodeRuangan": "003.7",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 231,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": 1,
    "kodeRuangan": "003.8.01",
    "namaRuangan": "Ruang Diskusi",
    "koordinat": null
  },
  {
    "id": 232,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": 2,
    "kodeRuangan": "003.8.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 233,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": 3,
    "kodeRuangan": "003.8.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 234,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": 4,
    "kodeRuangan": "003.8.04",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 235,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": 5,
    "kodeRuangan": "003.8.05",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 236,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 8,
    "ruangan": null,
    "kodeRuangan": "003.8",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 237,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": 1,
    "kodeRuangan": "003.9.01",
    "namaRuangan": "Ruang Diskusi",
    "koordinat": null
  },
  {
    "id": 238,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": 2,
    "kodeRuangan": "003.9.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 239,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": 3,
    "kodeRuangan": "003.9.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 240,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": 4,
    "kodeRuangan": "003.9.04",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 241,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": 5,
    "kodeRuangan": "003.9.05",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 242,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 9,
    "ruangan": null,
    "kodeRuangan": "003.9",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 243,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 1,
    "kodeRuangan": "003.10.01",
    "namaRuangan": "Ruang Komunitas Mahasiswa",
    "koordinat": null
  },
  {
    "id": 244,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 2,
    "kodeRuangan": "003.10.02",
    "namaRuangan": "Ruang Pre Function",
    "koordinat": null
  },
  {
    "id": 245,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 3,
    "kodeRuangan": "003.10.03",
    "namaRuangan": "Ruang Serbaguna",
    "koordinat": null
  },
  {
    "id": 246,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 4,
    "kodeRuangan": "003.10.04",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 247,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 5,
    "kodeRuangan": "003.10.05",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 248,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": 6,
    "kodeRuangan": "003.10.06",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 249,
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "lantai": 10,
    "ruangan": null,
    "kodeRuangan": "003.10",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 250,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "004.1.01",
    "namaRuangan": "Ruang Administrasi Jurusan",
    "koordinat": null
  },
  {
    "id": 251,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "004.1.02",
    "namaRuangan": "Ruang Tunggu",
    "koordinat": null
  },
  {
    "id": 252,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "004.1.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 253,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "004.1.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 254,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "004.1.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 255,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "004.1.06",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 256,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "004.1.07",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 257,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "004.1.08",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 258,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "004.1.09",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 259,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "004.1.10",
    "namaRuangan": "Ruang Rapat Jurusan",
    "koordinat": null
  },
  {
    "id": 260,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "004.1.11",
    "namaRuangan": "Ruang Kepala Prodi Pendidikan Fisika",
    "koordinat": null
  },
  {
    "id": 261,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 12,
    "kodeRuangan": "004.1.12",
    "namaRuangan": "Ruang Kepala Prodi Fisika",
    "koordinat": null
  },
  {
    "id": 262,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 13,
    "kodeRuangan": "004.1.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 263,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "004.1.14",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 264,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "004.2.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 265,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "004.2.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 266,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "004.2.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 267,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "004.2.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 268,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "004.2.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 269,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "004.2.06",
    "namaRuangan": "Toilet Difable",
    "koordinat": null
  },
  {
    "id": 270,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "004.2.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 271,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "004.2.08",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 272,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "004.2.09",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 273,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "004.2.10",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 274,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "004.2.11",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 275,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "004.3.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 276,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "004.3.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 277,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "004.3.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 278,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "004.3.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 279,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "004.3.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 280,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "004.3.06",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 281,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "004.3.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 282,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "004.3.08",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 283,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "004.3.09",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 284,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "004.3.10",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 285,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "004.3.11",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 286,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 3,
    "ruangan": 12,
    "kodeRuangan": "004.3.12",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 287,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "004.4.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 288,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "004.4.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 289,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "004.4.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 290,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "004.4.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 291,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "004.4.06",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 292,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 7,
    "kodeRuangan": "004.4.07",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 293,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 8,
    "kodeRuangan": "004.4.08",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 294,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "004.4.09",
    "namaRuangan": "Ruang Penguji A",
    "koordinat": null
  },
  {
    "id": 295,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 10,
    "kodeRuangan": "004.4.10",
    "namaRuangan": "Ruang Micro Teaching A",
    "koordinat": null
  },
  {
    "id": 296,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 11,
    "kodeRuangan": "004.4.11",
    "namaRuangan": "Ruang Micro Teaching B",
    "koordinat": null
  },
  {
    "id": 297,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 12,
    "kodeRuangan": "004.4.12",
    "namaRuangan": "Ruang Penguji B",
    "koordinat": null
  },
  {
    "id": 298,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 13,
    "kodeRuangan": "004.4.13",
    "namaRuangan": "Ruang Penguji C",
    "koordinat": null
  },
  {
    "id": 299,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 14,
    "kodeRuangan": "004.4.14",
    "namaRuangan": "Ruang Microteaching C",
    "koordinat": null
  },
  {
    "id": 300,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 15,
    "kodeRuangan": "004.4.15",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 301,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 4,
    "ruangan": 16,
    "kodeRuangan": "004.4.16",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 302,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 1,
    "kodeRuangan": "004.5.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 303,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 2,
    "kodeRuangan": "004.5.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 304,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 3,
    "kodeRuangan": "004.5.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 305,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 4,
    "kodeRuangan": "004.5.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 306,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 5,
    "kodeRuangan": "004.5.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 307,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 6,
    "kodeRuangan": "004.5.06",
    "namaRuangan": "Ruang Control",
    "koordinat": null
  },
  {
    "id": 308,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 7,
    "kodeRuangan": "004.5.07",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 309,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 8,
    "kodeRuangan": "004.5.08",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 310,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 9,
    "kodeRuangan": "004.5.09",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 311,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 10,
    "kodeRuangan": "004.5.10",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 312,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 11,
    "kodeRuangan": "004.5.11",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 313,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 5,
    "ruangan": 12,
    "kodeRuangan": "004.5.12",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 314,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 1,
    "kodeRuangan": "004.6.01",
    "namaRuangan": "Ruang Dosen A",
    "koordinat": null
  },
  {
    "id": 315,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 2,
    "kodeRuangan": "004.6.02",
    "namaRuangan": "Ruang Dosen B",
    "koordinat": null
  },
  {
    "id": 316,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 3,
    "kodeRuangan": "004.6.03",
    "namaRuangan": "Ruang Dosen C",
    "koordinat": null
  },
  {
    "id": 317,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 4,
    "kodeRuangan": "004.6.04",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 318,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 5,
    "kodeRuangan": "004.6.05",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 319,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 6,
    "kodeRuangan": "004.6.06",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 320,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 7,
    "kodeRuangan": "004.6.07",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 321,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 8,
    "kodeRuangan": "004.6.08",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 322,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 9,
    "kodeRuangan": "004.6.09",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 323,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 10,
    "kodeRuangan": "004.6.10",
    "namaRuangan": "Ruang Dosen D",
    "koordinat": null
  },
  {
    "id": 324,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 11,
    "kodeRuangan": "004.6.11",
    "namaRuangan": "Ruang Dosen E",
    "koordinat": null
  },
  {
    "id": 325,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 12,
    "kodeRuangan": "004.6.12",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 326,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 6,
    "ruangan": 13,
    "kodeRuangan": "004.6.13",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 327,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 1,
    "kodeRuangan": "004.7.01",
    "namaRuangan": "Ruang Dosen A",
    "koordinat": null
  },
  {
    "id": 328,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 2,
    "kodeRuangan": "004.7.02",
    "namaRuangan": "Ruang Dosen B",
    "koordinat": null
  },
  {
    "id": 329,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 3,
    "kodeRuangan": "004.7.03",
    "namaRuangan": "Ruang Dosen C",
    "koordinat": null
  },
  {
    "id": 330,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 4,
    "kodeRuangan": "004.7.04",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 331,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 5,
    "kodeRuangan": "004.7.05",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 332,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 6,
    "kodeRuangan": "004.7.06",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 333,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 7,
    "kodeRuangan": "004.7.07",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 334,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 8,
    "kodeRuangan": "004.7.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 335,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 9,
    "kodeRuangan": "004.7.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 336,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 10,
    "kodeRuangan": "004.7.10",
    "namaRuangan": "Toilet Dosen",
    "koordinat": null
  },
  {
    "id": 337,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 11,
    "kodeRuangan": "004.7.11",
    "namaRuangan": "Ruang Dosen D",
    "koordinat": null
  },
  {
    "id": 338,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 12,
    "kodeRuangan": "004.7.12",
    "namaRuangan": "Ruang Dosen E",
    "koordinat": null
  },
  {
    "id": 339,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 13,
    "kodeRuangan": "004.7.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 340,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 7,
    "ruangan": 14,
    "kodeRuangan": "004.7.14",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 341,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 8,
    "ruangan": 1,
    "kodeRuangan": "004.8.01",
    "namaRuangan": "Ruang Komunitas",
    "koordinat": null
  },
  {
    "id": 342,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 8,
    "ruangan": 2,
    "kodeRuangan": "004.8.02",
    "namaRuangan": "Ruang Pre Function",
    "koordinat": null
  },
  {
    "id": 343,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 8,
    "ruangan": 3,
    "kodeRuangan": "004.8.03",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 344,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 8,
    "ruangan": 4,
    "kodeRuangan": "004.8.04",
    "namaRuangan": "Ruang Serbaguna",
    "koordinat": null
  },
  {
    "id": 345,
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "lantai": 8,
    "ruangan": 5,
    "kodeRuangan": "004.8.05",
    "namaRuangan": "Lift",
    "koordinat": null
  },
  {
    "id": 346,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "005.1.01",
    "namaRuangan": "Ruang Administrasi Jurusan",
    "koordinat": null
  },
  {
    "id": 347,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "005.1.02",
    "namaRuangan": "Ruang Tunggu",
    "koordinat": null
  },
  {
    "id": 348,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": "02.1",
    "kodeRuangan": "005.1.02.1",
    "namaRuangan": "Ruang Sekretaris Jurusan",
    "koordinat": null
  },
  {
    "id": 349,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": "02.2",
    "kodeRuangan": "005.1.02.2",
    "namaRuangan": "Ruang Ketua Jurusan",
    "koordinat": null
  },
  {
    "id": 350,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": "02.3",
    "kodeRuangan": "005.1.02.3",
    "namaRuangan": "Ruang Rapat Fungsionaris",
    "koordinat": null
  },
  {
    "id": 351,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "005.1.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 352,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "005.1.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 353,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "005.1.05",
    "namaRuangan": "Toilet Dosen A",
    "koordinat": null
  },
  {
    "id": 354,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "005.1.06",
    "namaRuangan": "Toilet Dosen B",
    "koordinat": null
  },
  {
    "id": 355,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "005.1.07",
    "namaRuangan": "Panel",
    "koordinat": null
  },
  {
    "id": 356,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "005.1.08",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 357,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "005.1.09",
    "namaRuangan": "Ruang Control",
    "koordinat": null
  },
  {
    "id": 358,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "005.1.10",
    "namaRuangan": "Ruang Kaprodi Pendidikan Biologi",
    "koordinat": null
  },
  {
    "id": 359,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "005.1.11",
    "namaRuangan": "Ruang Kaprodi Pendidikan IPA",
    "koordinat": null
  },
  {
    "id": 360,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 12,
    "kodeRuangan": "005.1.12",
    "namaRuangan": "Ruang Kaprodi Biologi",
    "koordinat": null
  },
  {
    "id": 361,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 13,
    "kodeRuangan": "005.1.13",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 362,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "005.1.14",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 363,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 1,
    "ruangan": 15,
    "kodeRuangan": "005.1.15",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 364,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "005.2.01",
    "namaRuangan": "Ruang Penguji A",
    "koordinat": null
  },
  {
    "id": 365,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "005.2.02",
    "namaRuangan": "Ruang Mikroteaching A",
    "koordinat": null
  },
  {
    "id": 366,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "005.2.03",
    "namaRuangan": "Ruang Mikroteaching B",
    "koordinat": null
  },
  {
    "id": 367,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "005.2.04",
    "namaRuangan": "Ruang Penguji B",
    "koordinat": null
  },
  {
    "id": 368,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "005.2.05",
    "namaRuangan": "Ruang Penguji C",
    "koordinat": null
  },
  {
    "id": 369,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "005.2.06",
    "namaRuangan": "Mikroteaching C",
    "koordinat": null
  },
  {
    "id": 370,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "005.2.07",
    "namaRuangan": "Ruang Kaprodi S2 Pendidikan Biologi",
    "koordinat": null
  },
  {
    "id": 371,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "005.2.08",
    "namaRuangan": "Ruang Baca",
    "koordinat": null
  },
  {
    "id": 372,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "005.2.09",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 373,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "005.2.10",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 374,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "005.2.11",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 375,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "005.2.12",
    "namaRuangan": "Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 376,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 14,
    "kodeRuangan": "005.2.14",
    "namaRuangan": "Ruang Rapat Jurusan",
    "koordinat": null
  },
  {
    "id": 377,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 15,
    "kodeRuangan": "005.2.15",
    "namaRuangan": "Ruang Penguji D",
    "koordinat": null
  },
  {
    "id": 378,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 16,
    "kodeRuangan": "005.2.16",
    "namaRuangan": "Ruang Mikroteaching D",
    "koordinat": null
  },
  {
    "id": 379,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 17,
    "kodeRuangan": "005.2.17",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 380,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 18,
    "kodeRuangan": "005.2.18",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 381,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 2,
    "ruangan": 19,
    "kodeRuangan": "005.2.19",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 382,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "005.3.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 383,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "005.3.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 384,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "005.3.03",
    "namaRuangan": "Toilet Cewek",
    "koordinat": null
  },
  {
    "id": 385,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "005.3.04",
    "namaRuangan": "Toilet Cowok",
    "koordinat": null
  },
  {
    "id": 386,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "005.3.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 387,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "005.3.07",
    "namaRuangan": "Toilet Difabel",
    "koordinat": null
  },
  {
    "id": 388,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "005.3.08",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 389,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "005.3.09",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 390,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "005.3.10",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 391,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "005.3.11",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 392,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "005.4.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 393,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "005.4.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 394,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 3,
    "kodeRuangan": "005.4.03",
    "namaRuangan": "Toilet Cewek",
    "koordinat": null
  },
  {
    "id": 395,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "005.4.04",
    "namaRuangan": "Toilet Cowok",
    "koordinat": null
  },
  {
    "id": 396,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "005.4.05",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 397,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "005.4.06",
    "namaRuangan": "Tempat Wudhu",
    "koordinat": null
  },
  {
    "id": 398,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 7,
    "kodeRuangan": "005.4.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 399,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 8,
    "kodeRuangan": "005.4.08",
    "namaRuangan": "Tangga Darurat",
    "koordinat": null
  },
  {
    "id": 400,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "005.4.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 401,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 4,
    "ruangan": 10,
    "kodeRuangan": "005.4.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 402,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 1,
    "kodeRuangan": "005.5.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 403,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 2,
    "kodeRuangan": "005.5.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 404,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 3,
    "kodeRuangan": "005.5.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 405,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 4,
    "kodeRuangan": "005.5.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 406,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 5,
    "kodeRuangan": "005.5.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 407,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 8,
    "kodeRuangan": "005.5.08",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 408,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 9,
    "kodeRuangan": "005.5.09",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 409,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 10,
    "kodeRuangan": "005.5.10",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 410,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 5,
    "ruangan": 11,
    "kodeRuangan": "005.5.11",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 411,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 1,
    "kodeRuangan": "005.6.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 412,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 2,
    "kodeRuangan": "005.6.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 413,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 3,
    "kodeRuangan": "005.6.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 414,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 4,
    "kodeRuangan": "005.6.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 415,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 6,
    "kodeRuangan": "005.6.06",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 416,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 7,
    "kodeRuangan": "005.6.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 417,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 8,
    "kodeRuangan": "005.6.08",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 418,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 9,
    "kodeRuangan": "005.6.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 419,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 6,
    "ruangan": 10,
    "kodeRuangan": "005.6.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 420,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 1,
    "kodeRuangan": "005.7.01",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 421,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 2,
    "kodeRuangan": "005.7.02",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 422,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 3,
    "kodeRuangan": "005.7.03",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 423,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 4,
    "kodeRuangan": "005.7.04",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 424,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 5,
    "kodeRuangan": "005.7.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 425,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 7,
    "kodeRuangan": "005.7.07",
    "namaRuangan": "Ruang Kelas",
    "koordinat": null
  },
  {
    "id": 426,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 8,
    "kodeRuangan": "005.7.08",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 427,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 9,
    "kodeRuangan": "005.7.09",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 428,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 7,
    "ruangan": 10,
    "kodeRuangan": "005.7.10",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 429,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 8,
    "ruangan": 1,
    "kodeRuangan": "005.8.01",
    "namaRuangan": "Ruang Diskusi",
    "koordinat": null
  },
  {
    "id": 430,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 8,
    "ruangan": 2,
    "kodeRuangan": "005.8.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 431,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 8,
    "ruangan": 3,
    "kodeRuangan": "005.8.03",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 432,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 8,
    "ruangan": 4,
    "kodeRuangan": "005.8.04",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 433,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 8,
    "ruangan": 5,
    "kodeRuangan": "005.8.05",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 434,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 9,
    "ruangan": 1,
    "kodeRuangan": "005.9.01",
    "namaRuangan": "Ruang Diskusi",
    "koordinat": null
  },
  {
    "id": 435,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 9,
    "ruangan": 2,
    "kodeRuangan": "005.9.02",
    "namaRuangan": "Ruang Dosen",
    "koordinat": null
  },
  {
    "id": 436,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 9,
    "ruangan": 3,
    "kodeRuangan": "005.9.03",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 437,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 9,
    "ruangan": 4,
    "kodeRuangan": "005.9.04",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 438,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 9,
    "ruangan": 5,
    "kodeRuangan": "005.9.05",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 439,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 1,
    "kodeRuangan": "005.10.01",
    "namaRuangan": "Ruang Komunitas Mahasiswa",
    "koordinat": null
  },
  {
    "id": 440,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 2,
    "kodeRuangan": "005.10.02",
    "namaRuangan": "Ruang Pre Function",
    "koordinat": null
  },
  {
    "id": 441,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 3,
    "kodeRuangan": "005.10.03",
    "namaRuangan": "Ruang Serbaguna",
    "koordinat": null
  },
  {
    "id": 442,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 4,
    "kodeRuangan": "005.10.04",
    "namaRuangan": "Tangga",
    "koordinat": null
  },
  {
    "id": 443,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 5,
    "kodeRuangan": "005.10.05",
    "namaRuangan": "Lift Mahasiswa",
    "koordinat": null
  },
  {
    "id": 444,
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "lantai": 10,
    "ruangan": 6,
    "kodeRuangan": "005.10.06",
    "namaRuangan": "Lift Dosen",
    "koordinat": null
  },
  {
    "id": 445,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "006.1.01 A",
    "namaRuangan": "Ruang",
    "koordinat": null
  },
  {
    "id": 446,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "006.1.03",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 447,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "006.1.04",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 448,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "006.1.05",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 449,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "006.1.05",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 450,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "006.1.06",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 451,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "006.1.07",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 452,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "006.1.08",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 453,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "006.1.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 454,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "006.1.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 455,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "006.2.01 A",
    "namaRuangan": "Billing Office",
    "koordinat": null
  },
  {
    "id": 456,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "006.2.02",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 457,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "006.2.03",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 458,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "006.2.04",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 459,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "006.2.04",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 460,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "006.2.05",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 461,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "006.2.06",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 462,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "006.2.07",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 463,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "006.2.08",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 464,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "006.2.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 465,
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "006.2.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 466,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "007.1.01",
    "namaRuangan": "Ruang Penelitian Kimia Fisika dan Anorganik",
    "koordinat": null
  },
  {
    "id": 467,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "007.1.02",
    "namaRuangan": "Ruang Praktikum Kimia Umum",
    "koordinat": null
  },
  {
    "id": 468,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "007.1.03",
    "namaRuangan": "Ruang",
    "koordinat": null
  },
  {
    "id": 469,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "007.1.06",
    "namaRuangan": "Ruang Persiapan Lt. 1 dan Dapur",
    "koordinat": null
  },
  {
    "id": 470,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "007.1.08",
    "namaRuangan": "Ruang Praktikum Kimia Umum",
    "koordinat": null
  },
  {
    "id": 471,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "007.1.11",
    "namaRuangan": "Ruang Seminar Lab Kimia",
    "koordinat": null
  },
  {
    "id": 472,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "007.1.14",
    "namaRuangan": "Ruang Penelitian",
    "koordinat": null
  },
  {
    "id": 473,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 15,
    "kodeRuangan": "007.1.15",
    "namaRuangan": "Ruang Instrumen AAS",
    "koordinat": null
  },
  {
    "id": 474,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": 16,
    "kodeRuangan": "007.1.16",
    "namaRuangan": "Ruang Asisten Praktikum Kimia Umum",
    "koordinat": null
  },
  {
    "id": 475,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "007.1.xx",
    "namaRuangan": "Ruang",
    "koordinat": null
  },
  {
    "id": 476,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "007.1",
    "namaRuangan": "Hall",
    "koordinat": null
  },
  {
    "id": 477,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "007.2.01",
    "namaRuangan": "Ruang Praktikum Kimia Fisika",
    "koordinat": null
  },
  {
    "id": 478,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "007.2.02",
    "namaRuangan": "Ruang Penelitian Kimia Komputasi",
    "koordinat": null
  },
  {
    "id": 479,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "007.2.03",
    "namaRuangan": "Ruang Praktikum Komputer",
    "koordinat": null
  },
  {
    "id": 480,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "007.2.07",
    "namaRuangan": "Ruang Persiapan Lt. 2",
    "koordinat": null
  },
  {
    "id": 481,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "007.2.10",
    "namaRuangan": "Ruang Praktikum Biokimia",
    "koordinat": null
  },
  {
    "id": 482,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "007.2.11",
    "namaRuangan": "Ruang Kepala Laboratorium",
    "koordinat": null
  },
  {
    "id": 483,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "007.2.12",
    "namaRuangan": "Ruang Praktikum Kimia Anorganik",
    "koordinat": null
  },
  {
    "id": 484,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 14,
    "kodeRuangan": "007.2.14",
    "namaRuangan": "Ruang Instrumen GC dan HAL",
    "koordinat": null
  },
  {
    "id": 485,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 15,
    "kodeRuangan": "007.2.15",
    "namaRuangan": "Ruang Asisten Praktikum Kimia Fisika dan Anorganik",
    "koordinat": null
  },
  {
    "id": 486,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": 16,
    "kodeRuangan": "007.2.16",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 487,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": "xx",
    "kodeRuangan": "007.2.xx",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 488,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "007.2",
    "namaRuangan": "Hall",
    "koordinat": null
  },
  {
    "id": 489,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "007.3.01",
    "namaRuangan": "Ruang Praktikum Kimia Analitik",
    "koordinat": null
  },
  {
    "id": 490,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "007.3.02",
    "namaRuangan": "Ruang Penelitian Kimia Organik Bahan Alam",
    "koordinat": null
  },
  {
    "id": 491,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "007.3.03",
    "namaRuangan": "Ruang Penelitian Biokimia Kimia Organik dan Kimia",
    "koordinat": null
  },
  {
    "id": 492,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "007.3.06",
    "namaRuangan": "Ruang Asisten Praktikum Kimia Organik Biokimia dan Kimia Analitik",
    "koordinat": null
  },
  {
    "id": 493,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "007.3.07",
    "namaRuangan": "Ruang Instrumen UV-Vis Spektrofotometer",
    "koordinat": null
  },
  {
    "id": 494,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "007.3.09",
    "namaRuangan": "Ruang Instrumen",
    "koordinat": null
  },
  {
    "id": 495,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "007.3.11",
    "namaRuangan": "Ruang Praktikum Kimia Organik",
    "koordinat": null
  },
  {
    "id": 496,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 14,
    "kodeRuangan": "007.3.14",
    "namaRuangan": "Ruang Persiapan Lt. 3",
    "koordinat": null
  },
  {
    "id": 497,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": 15,
    "kodeRuangan": "007.3.15",
    "namaRuangan": "Ruang Persiapan Mikrobiologi",
    "koordinat": null
  },
  {
    "id": 498,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": "xx",
    "kodeRuangan": "007.3.xx",
    "namaRuangan": "Ruang Admin Laboran",
    "koordinat": null
  },
  {
    "id": 499,
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "007.3",
    "namaRuangan": "Hall",
    "koordinat": null
  },
  {
    "id": 500,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "008.1.01",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 501,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "008.1.02",
    "namaRuangan": "Ruang Rapat",
    "koordinat": null
  },
  {
    "id": 502,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "008.1.03",
    "namaRuangan": "Ruang Penelitian SEM",
    "koordinat": null
  },
  {
    "id": 503,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "008.1.04",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 504,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "008.1.05",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 505,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "008.1.06",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 506,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "008.1.07",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 507,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "008.1.09",
    "namaRuangan": "Ruang Baca",
    "koordinat": null
  },
  {
    "id": 508,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "008.1.10",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 509,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "008.1",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 510,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "008.2.01",
    "namaRuangan": "Laboratorium Listrik",
    "koordinat": null
  },
  {
    "id": 511,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "008.2.03",
    "namaRuangan": "Laboratorium Media Pembelajaran",
    "koordinat": null
  },
  {
    "id": 512,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "008.2.03",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 513,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "008.2.04",
    "namaRuangan": "Laboratorium Komputer",
    "koordinat": null
  },
  {
    "id": 514,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "008.2.05",
    "namaRuangan": "Laboratorium Fisika Bumi",
    "koordinat": null
  },
  {
    "id": 515,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "008.2.06",
    "namaRuangan": "Laboratorium Instrumentasi",
    "koordinat": null
  },
  {
    "id": 516,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "008.2.07",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 517,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "008.2.08",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 518,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "008.2.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 519,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "008.2.10",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 520,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "008.2.11",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 521,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "008.2.12",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 522,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": 13,
    "kodeRuangan": "008.2.13",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 523,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "008.2",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 524,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "008.3.01",
    "namaRuangan": "Ruang Laboratorium Optik",
    "koordinat": null
  },
  {
    "id": 525,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "008.3.02",
    "namaRuangan": "Ruang Asisten Lab",
    "koordinat": null
  },
  {
    "id": 526,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "008.3.03",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 527,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "008.3.04",
    "namaRuangan": "Laboratorium Fisika Umum",
    "koordinat": null
  },
  {
    "id": 528,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "008.3.05",
    "namaRuangan": "Gudang Bahan Habis Pakai",
    "koordinat": null
  },
  {
    "id": 529,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "008.3.06",
    "namaRuangan": "Toilet Wanita",
    "koordinat": null
  },
  {
    "id": 530,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "008.3.07",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 531,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "008.3.08",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 532,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "008.3.09",
    "namaRuangan": "Toilet Pria",
    "koordinat": null
  },
  {
    "id": 533,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "008.3.11",
    "namaRuangan": "Mushola",
    "koordinat": null
  },
  {
    "id": 534,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": 12,
    "kodeRuangan": "008.3.12",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 535,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": "xx",
    "kodeRuangan": "008.3.xx",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 536,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "008.3",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 537,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "008.4.01",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 538,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "008.4.02",
    "namaRuangan": "Ground Tank",
    "koordinat": null
  },
  {
    "id": 539,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 3,
    "kodeRuangan": "008.4.03",
    "namaRuangan": "Ruang Observasi Bintang",
    "koordinat": null
  },
  {
    "id": 540,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "008.4.04",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 541,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "008.4.05",
    "namaRuangan": "Toilet",
    "koordinat": null
  },
  {
    "id": 542,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "008.4.06",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 543,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 7,
    "kodeRuangan": "008.4.07",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 544,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": 8,
    "kodeRuangan": "008.4.08",
    "namaRuangan": "Hall Luar",
    "koordinat": null
  },
  {
    "id": 545,
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "lantai": 4,
    "ruangan": null,
    "kodeRuangan": "008.4",
    "namaRuangan": "Koridor",
    "koordinat": null
  },
  {
    "id": 546,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "009.1.01",
    "namaRuangan": "Lab Jaringan",
    "koordinat": null
  },
  {
    "id": 547,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "009.1.02",
    "namaRuangan": "Ruang HMJ",
    "koordinat": null
  },
  {
    "id": 548,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "009.1.03",
    "namaRuangan": "Ruang Pusat Bisnis",
    "koordinat": null
  },
  {
    "id": 549,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "009.1.04",
    "namaRuangan": "Ruang Riset dan Pengabdian Masyarakat",
    "koordinat": null
  },
  {
    "id": 550,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "009.1.05",
    "namaRuangan": "Ruang Prodi Ilkom",
    "koordinat": null
  },
  {
    "id": 551,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "009.1.06",
    "namaRuangan": "Ruang Pusat Kreativitas",
    "koordinat": null
  },
  {
    "id": 552,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "009.1.07",
    "namaRuangan": "Kamar Mandi",
    "koordinat": null
  },
  {
    "id": 553,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "009.1.08",
    "namaRuangan": "Lab Multimedia",
    "koordinat": null
  },
  {
    "id": 554,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "009.2.01",
    "namaRuangan": "Lab Komputasi dan AI",
    "koordinat": null
  },
  {
    "id": 555,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "009.2.02",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 556,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "009.2.03",
    "namaRuangan": "Ruang Kepala Lab",
    "koordinat": null
  },
  {
    "id": 557,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "009.2.04",
    "namaRuangan": "Ruang Penelitian",
    "koordinat": null
  },
  {
    "id": 558,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "009.2.05",
    "namaRuangan": "Ruang Administrasi",
    "koordinat": null
  },
  {
    "id": 559,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "009.2.06",
    "namaRuangan": "Kamar Mandi",
    "koordinat": null
  },
  {
    "id": 560,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "009.2.07",
    "namaRuangan": "Lab Pemrograman dan Komputasi",
    "koordinat": null
  },
  {
    "id": 561,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "009.2.08",
    "namaRuangan": "Lab R.Listrik & Fisika Modern",
    "koordinat": null
  },
  {
    "id": 562,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "009.3.01",
    "namaRuangan": "Lab Jaringan Komputer dan Rekayasa Lunak",
    "koordinat": null
  },
  {
    "id": 563,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "009.3.02",
    "namaRuangan": "Lab Matematika",
    "koordinat": null
  },
  {
    "id": 564,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "009.3.03",
    "namaRuangan": "Gudang Inventaris",
    "koordinat": null
  },
  {
    "id": 565,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "009.3.04",
    "namaRuangan": "Kamar Perpustakaan",
    "koordinat": null
  },
  {
    "id": 566,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "009.3.05",
    "namaRuangan": "Mushalla",
    "koordinat": null
  },
  {
    "id": 567,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "009.3.06",
    "namaRuangan": "Gudang Bahan 1",
    "koordinat": null
  },
  {
    "id": 568,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "009.3.07",
    "namaRuangan": "Gudang Bahan 2",
    "koordinat": null
  },
  {
    "id": 569,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 8,
    "kodeRuangan": "009.3.08",
    "namaRuangan": "Kamar Mandi",
    "koordinat": null
  },
  {
    "id": 570,
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "009.3.09",
    "namaRuangan": "Ruang Multimedia dan Game Development",
    "koordinat": null
  },
  {
    "id": 571,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "010.1.01",
    "namaRuangan": "Lab Mikrobiologi",
    "koordinat": null
  },
  {
    "id": 572,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "010.1.03",
    "namaRuangan": "Ruang Furnace",
    "koordinat": null
  },
  {
    "id": 573,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "010.1.04",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 574,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "010.1.05",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 575,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "010.1.06",
    "namaRuangan": "Pantry",
    "koordinat": null
  },
  {
    "id": 576,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "010.1.07",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 577,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "010.1.08",
    "namaRuangan": "Lab Biokimia",
    "koordinat": null
  },
  {
    "id": 578,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "010.1",
    "namaRuangan": "Koridor",
    "koordinat": null
  },
  {
    "id": 579,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "010.2.01",
    "namaRuangan": "Lab Mikroteknik",
    "koordinat": null
  },
  {
    "id": 580,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "010.2.02",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 581,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "010.2.03",
    "namaRuangan": "Gudang Bahan",
    "koordinat": null
  },
  {
    "id": 582,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "010.2.04",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 583,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "010.2.05",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 584,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "010.2.06",
    "namaRuangan": "Gudang Bahan",
    "koordinat": null
  },
  {
    "id": 585,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "010.2.07",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 586,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "010.2.08",
    "namaRuangan": "Lab Struktur dan Perkembangan",
    "koordinat": null
  },
  {
    "id": 587,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "010.2",
    "namaRuangan": "Koridor",
    "koordinat": null
  },
  {
    "id": 588,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "010.3.01",
    "namaRuangan": "Lab Penelitian GCMS",
    "koordinat": null
  },
  {
    "id": 589,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "010.3.02",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 590,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "010.3.04",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 591,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "010.3.05",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 592,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "010.3.06",
    "namaRuangan": "R. Perpustakaan Biologi",
    "koordinat": null
  },
  {
    "id": 593,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "010.3.07",
    "namaRuangan": "Lab Komputer",
    "koordinat": null
  },
  {
    "id": 594,
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "010.3",
    "namaRuangan": "Koridor",
    "koordinat": null
  },
  {
    "id": 595,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "011.1.01",
    "namaRuangan": "Ruang Klinik",
    "koordinat": null
  },
  {
    "id": 596,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "011.1.02",
    "namaRuangan": "Lab Genetika",
    "koordinat": null
  },
  {
    "id": 597,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 3,
    "kodeRuangan": "011.1.03",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 598,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 4,
    "kodeRuangan": "011.1.04",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 599,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 5,
    "kodeRuangan": "011.1.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 600,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "011.1.06",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 601,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 6,
    "kodeRuangan": "011.1.06",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 602,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "011.1.07",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 603,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 8,
    "kodeRuangan": "011.1.08",
    "namaRuangan": "Kamar Mandi Difabel",
    "koordinat": null
  },
  {
    "id": 604,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "011.1.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 605,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "011.1.10",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 606,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "011.1.11",
    "namaRuangan": "Lab Fisiologi",
    "koordinat": null
  },
  {
    "id": 607,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 1,
    "ruangan": null,
    "kodeRuangan": "011.1",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 608,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "011.2.01",
    "namaRuangan": "Ruang Kepala Lab",
    "koordinat": null
  },
  {
    "id": 609,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "011.2.02",
    "namaRuangan": "Lab Biosistematik",
    "koordinat": null
  },
  {
    "id": 610,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "011.2.03",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 611,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "011.2.04",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 612,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "011.2.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 613,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "011.2.06",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 614,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "011.2.06",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 615,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "011.2.07",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 616,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "011.2.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 617,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "011.2.10",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 618,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "011.2.11",
    "namaRuangan": "Lab Taksonomi Hewan Vertebrata",
    "koordinat": null
  },
  {
    "id": 619,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 2,
    "ruangan": null,
    "kodeRuangan": "011.2",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 620,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 1,
    "kodeRuangan": "011.3.01",
    "namaRuangan": "Ruang Mikrofotografi",
    "koordinat": null
  },
  {
    "id": 621,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 2,
    "kodeRuangan": "011.3.02",
    "namaRuangan": "Lab Kultur Jaringan",
    "koordinat": null
  },
  {
    "id": 622,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 3,
    "kodeRuangan": "011.3.03",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 623,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 4,
    "kodeRuangan": "011.3.04",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 624,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 5,
    "kodeRuangan": "011.3.05",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 625,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "011.3.06",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 626,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 6,
    "kodeRuangan": "011.3.06",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 627,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 7,
    "kodeRuangan": "011.3.07",
    "namaRuangan": "Kamar Mandi Dosen",
    "koordinat": null
  },
  {
    "id": 628,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 9,
    "kodeRuangan": "011.3.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 629,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 10,
    "kodeRuangan": "011.3.10",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 630,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": 11,
    "kodeRuangan": "011.3.11",
    "namaRuangan": "Lab Biologi Sel dan Molekuler",
    "koordinat": null
  },
  {
    "id": 631,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 3,
    "ruangan": null,
    "kodeRuangan": "011.3",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 632,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 1,
    "kodeRuangan": "011.4.01",
    "namaRuangan": "Ruang Rapat Dosen",
    "koordinat": null
  },
  {
    "id": 633,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 2,
    "kodeRuangan": "011.4.02",
    "namaRuangan": "Ruang Laboran",
    "koordinat": null
  },
  {
    "id": 634,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 3,
    "kodeRuangan": "011.4.03",
    "namaRuangan": "Lab Biologi Umum",
    "koordinat": null
  },
  {
    "id": 635,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 4,
    "kodeRuangan": "011.4.04",
    "namaRuangan": "Musholla",
    "koordinat": null
  },
  {
    "id": 636,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 5,
    "kodeRuangan": "011.4.05",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 637,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "011.4.06",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 638,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 6,
    "kodeRuangan": "011.4.06",
    "namaRuangan": "Janitor",
    "koordinat": null
  },
  {
    "id": 639,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "011.4.09",
    "namaRuangan": "Ruang Panel",
    "koordinat": null
  },
  {
    "id": 640,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": 9,
    "kodeRuangan": "011.4.09",
    "namaRuangan": "Lab IPA Terpadu",
    "koordinat": null
  },
  {
    "id": 641,
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "lantai": 4,
    "ruangan": null,
    "kodeRuangan": "011.4",
    "namaRuangan": "Lobby",
    "koordinat": null
  },
  {
    "id": 642,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 1,
    "kodeRuangan": "012.1.01",
    "namaRuangan": "Ruang Tanpa Nama",
    "koordinat": null
  },
  {
    "id": 643,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 2,
    "kodeRuangan": "012.1.02",
    "namaRuangan": "Perpustakaan FMIPA",
    "koordinat": null
  },
  {
    "id": 644,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 7,
    "kodeRuangan": "012.1.07",
    "namaRuangan": "Kantor Dekan",
    "koordinat": null
  },
  {
    "id": 645,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 9,
    "kodeRuangan": "012.1.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 646,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 10,
    "kodeRuangan": "012.1.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 647,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 11,
    "kodeRuangan": "012.1.11",
    "namaRuangan": "Perpustakaan FT",
    "koordinat": null
  },
  {
    "id": 648,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 13,
    "kodeRuangan": "012.1.13",
    "namaRuangan": "Kantor Jurusan PKK",
    "koordinat": null
  },
  {
    "id": 649,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 14,
    "kodeRuangan": "012.1.14",
    "namaRuangan": "Kantor Jurusan Mesin",
    "koordinat": null
  },
  {
    "id": 650,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 15,
    "kodeRuangan": "012.1.15",
    "namaRuangan": "Kantor Wakil Dekan FT",
    "koordinat": null
  },
  {
    "id": 651,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": 16,
    "kodeRuangan": "012.1.16",
    "namaRuangan": "Kantor Tata Usaha",
    "koordinat": null
  },
  {
    "id": 652,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Kamar Mandi Pria",
    "koordinat": null
  },
  {
    "id": 653,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Kamar Mandi Wanita",
    "koordinat": null
  },
  {
    "id": 654,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Kamar Mandi Dekan",
    "koordinat": null
  },
  {
    "id": 655,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Gudang",
    "koordinat": null
  },
  {
    "id": 656,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Toilet Khusus Wakil Dekan & Tenaga Kependidikan",
    "koordinat": null
  },
  {
    "id": 657,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 1,
    "ruangan": "xx",
    "kodeRuangan": "012.1.xx",
    "namaRuangan": "Kantin",
    "koordinat": null
  },
  {
    "id": 658,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 1,
    "kodeRuangan": "012.2.01",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 659,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 2,
    "kodeRuangan": "012.2.02",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 660,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 3,
    "kodeRuangan": "012.2.03",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 661,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 4,
    "kodeRuangan": "012.2.04",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 662,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 5,
    "kodeRuangan": "012.2.05",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 663,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 6,
    "kodeRuangan": "012.2.06",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 664,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 7,
    "kodeRuangan": "012.2.07",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 665,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 8,
    "kodeRuangan": "012.2.08",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 666,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 9,
    "kodeRuangan": "012.2.09",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 667,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 10,
    "kodeRuangan": "012.2.10",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 668,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 11,
    "kodeRuangan": "012.2.11",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 669,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 12,
    "kodeRuangan": "012.2.12",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 670,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 13,
    "kodeRuangan": "012.2.13",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 671,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 14,
    "kodeRuangan": "012.2.14",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  },
  {
    "id": 672,
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "lantai": 2,
    "ruangan": 15,
    "kodeRuangan": "012.2.15",
    "namaRuangan": "Ruang Kuliah",
    "koordinat": null
  }
];

/**
 * Data Ruangan Dikelompokkan per Gedung (Key: kodeGedung)
 */
export const dataGedung = {
  "001": {
    "kodeGedung": "001",
    "namaGedung": "Gedung Syawal",
    "namaSingkat": "Syawal",
    "sheetName": "001 Syawal",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 38,
    "koordinat": null,
    "ruangan": [
      {
        "id": 1,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "001.1.01",
        "namaRuangan": "Ruang Informasi",
        "koordinat": null
      },
      {
        "id": 2,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "001.1.03",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 3,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "001.1.04",
        "namaRuangan": "Toilet Disabilitas",
        "koordinat": null
      },
      {
        "id": 4,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "001.1.05",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 5,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "001.1.06",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 6,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "001.1.07",
        "namaRuangan": "Gudang Inventaris",
        "koordinat": null
      },
      {
        "id": 7,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "001.1.10",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 8,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "001.1.11",
        "namaRuangan": "Ruang Pelayanan BMN",
        "koordinat": null
      },
      {
        "id": 9,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "001.1.xx",
        "namaRuangan": "Ruang Arsip",
        "koordinat": null
      },
      {
        "id": 10,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "001.1.xx",
        "namaRuangan": "Pintu Khusus Pegawai/Dosen",
        "koordinat": null
      },
      {
        "id": 11,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "001.1",
        "namaRuangan": "Lift Sebelah Utara",
        "koordinat": null
      },
      {
        "id": 12,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "001.2.02",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 13,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "001.2.03",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 14,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "001.2.04",
        "namaRuangan": "Toilet Disabilitas",
        "koordinat": null
      },
      {
        "id": 15,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "001.2.05",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 16,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "001.2.06",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 17,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "001.2.08",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 18,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "001.2.09",
        "namaRuangan": "Ruang Wudhu Pria",
        "koordinat": null
      },
      {
        "id": 19,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "001.2.10",
        "namaRuangan": "Ruang Wudhu Wanita",
        "koordinat": null
      },
      {
        "id": 20,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "001.2.12",
        "namaRuangan": "Ruang Guru Besar",
        "koordinat": null
      },
      {
        "id": 21,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": "xx",
        "kodeRuangan": "001.2.xx",
        "namaRuangan": "Ruang BKD",
        "koordinat": null
      },
      {
        "id": 22,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": "xx",
        "kodeRuangan": "001.2.xx",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 23,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "001.2",
        "namaRuangan": "Lift Sebelah Utara",
        "koordinat": null
      },
      {
        "id": 24,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "001.3.01",
        "namaRuangan": "Ruang Aula A",
        "koordinat": null
      },
      {
        "id": 25,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "001.3.03",
        "namaRuangan": "Panel",
        "koordinat": null
      },
      {
        "id": 26,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "001.3.04",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 27,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "001.3.05",
        "namaRuangan": "Toilet Disabilitas",
        "koordinat": null
      },
      {
        "id": 28,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "001.3.06",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 29,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "001.3.07",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 30,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "001.3.10",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 31,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 12,
        "kodeRuangan": "001.3.12",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 32,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": 13,
        "kodeRuangan": "001.3.13",
        "namaRuangan": "Ruang Aula D",
        "koordinat": null
      },
      {
        "id": 33,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": "xx",
        "kodeRuangan": "001.3.xx",
        "namaRuangan": "Aula B",
        "koordinat": null
      },
      {
        "id": 34,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": "xx",
        "kodeRuangan": "001.3.xx",
        "namaRuangan": "Aula C",
        "koordinat": null
      },
      {
        "id": 35,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": "xx",
        "kodeRuangan": "001.3.xx",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 36,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "001.3",
        "namaRuangan": "Hall",
        "koordinat": null
      },
      {
        "id": 37,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "001.3",
        "namaRuangan": "Lift Sebelah Selatan",
        "koordinat": null
      },
      {
        "id": 38,
        "kodeGedung": "001",
        "namaGedung": "Gedung Syawal",
        "lantai": 4,
        "ruangan": null,
        "kodeRuangan": "001.4",
        "namaRuangan": "Roof Top",
        "koordinat": null
      }
    ]
  },
  "002": {
    "kodeGedung": "002",
    "namaGedung": "Gedung Matematika",
    "namaSingkat": "Matematika",
    "sheetName": "002 Matematika",
    "totalLantai": 8,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalRuangan": 98,
    "koordinat": null,
    "ruangan": [
      {
        "id": 39,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "002.1.01",
        "namaRuangan": "Ruang Administrasi Jurusan",
        "koordinat": null
      },
      {
        "id": 40,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "002.1.02",
        "namaRuangan": "Ruang Tunggu",
        "koordinat": null
      },
      {
        "id": 41,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "002.1.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 42,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "002.1.04",
        "namaRuangan": "Kamar Mandi Perempuan",
        "koordinat": null
      },
      {
        "id": 43,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "002.1.05",
        "namaRuangan": "Kamar Mandi Laki-laki",
        "koordinat": null
      },
      {
        "id": 44,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "002.1.06",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 45,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "002.1.07",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 46,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "002.1.08",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 47,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "002.1.09",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 48,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "002.1.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 49,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "002.1.11",
        "namaRuangan": "Ruang Ketua Kaprodi Matematika",
        "koordinat": null
      },
      {
        "id": 50,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 12,
        "kodeRuangan": "002.1.12",
        "namaRuangan": "Ruang Ketua Pendidikan Matematika",
        "koordinat": null
      },
      {
        "id": 51,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 13,
        "kodeRuangan": "002.1.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 52,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "002.1.14",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 53,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "002.2.01",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 54,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "002.2.02",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 55,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "002.2.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 56,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "002.2.04",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 57,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "002.2.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 58,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "002.2.06",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 59,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "002.2.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 60,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "002.2.08",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 61,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "002.2.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 62,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "002.2.10",
        "namaRuangan": "Ruang Akreditasi",
        "koordinat": null
      },
      {
        "id": 63,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "002.3.01",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 64,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "002.3.02",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 65,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "002.3.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 66,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "002.3.04",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 67,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "002.3.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 68,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "002.3.06",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 69,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "002.3.07",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 70,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "002.3.08",
        "namaRuangan": "Panel",
        "koordinat": null
      },
      {
        "id": 71,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "002.3.09",
        "namaRuangan": "Ruang Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 72,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "002.3.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 73,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "002.3.11",
        "namaRuangan": "Ruang Ujian",
        "koordinat": null
      },
      {
        "id": 74,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 12,
        "kodeRuangan": "002.3.12",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 75,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 3,
        "ruangan": 13,
        "kodeRuangan": "002.3.13",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 76,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "002.4.01",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 77,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "002.4.02",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 78,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 3,
        "kodeRuangan": "002.4.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 79,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "002.4.04",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 80,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "002.4.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 81,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "002.4.06",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 82,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 7,
        "kodeRuangan": "002.4.07",
        "namaRuangan": "Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 83,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 8,
        "kodeRuangan": "002.4.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 84,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "002.4.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 85,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 10,
        "kodeRuangan": "002.4.10",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 86,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 11,
        "kodeRuangan": "002.4.11",
        "namaRuangan": "Ruang Penguji",
        "koordinat": null
      },
      {
        "id": 87,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 12,
        "kodeRuangan": "002.4.12",
        "namaRuangan": "Ruang Mikroteaching",
        "koordinat": null
      },
      {
        "id": 88,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 13,
        "kodeRuangan": "002.4.13",
        "namaRuangan": "Ruang Microteaching",
        "koordinat": null
      },
      {
        "id": 89,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 14,
        "kodeRuangan": "002.4.14",
        "namaRuangan": "Ruang Penguji",
        "koordinat": null
      },
      {
        "id": 90,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 15,
        "kodeRuangan": "002.4.15",
        "namaRuangan": "Ruang Penguji",
        "koordinat": null
      },
      {
        "id": 91,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 16,
        "kodeRuangan": "002.4.16",
        "namaRuangan": "Ruang Microteaching",
        "koordinat": null
      },
      {
        "id": 92,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 17,
        "kodeRuangan": "002.4.17",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 93,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 4,
        "ruangan": 18,
        "kodeRuangan": "002.4.18",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 94,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 1,
        "kodeRuangan": "002.5.01",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 95,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 2,
        "kodeRuangan": "002.5.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 96,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 3,
        "kodeRuangan": "002.5.03",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 97,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 4,
        "kodeRuangan": "002.5.04",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 98,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 5,
        "kodeRuangan": "002.5.05",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 99,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 6,
        "kodeRuangan": "002.5.06",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 100,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 7,
        "kodeRuangan": "002.5.07",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 101,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 8,
        "kodeRuangan": "002.5.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 102,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 9,
        "kodeRuangan": "002.5.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 103,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 10,
        "kodeRuangan": "002.5.10",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 104,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 11,
        "kodeRuangan": "002.5.11",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 105,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 12,
        "kodeRuangan": "002.5.12",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 106,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 5,
        "ruangan": 13,
        "kodeRuangan": "002.5.13",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 107,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 1,
        "kodeRuangan": "002.6.01",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 108,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 2,
        "kodeRuangan": "002.6.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 109,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 3,
        "kodeRuangan": "002.6.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 110,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 4,
        "kodeRuangan": "002.6.04",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 111,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 5,
        "kodeRuangan": "002.6.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 112,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 6,
        "kodeRuangan": "002.6.06",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 113,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 7,
        "kodeRuangan": "002.6.07",
        "namaRuangan": "Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 114,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 8,
        "kodeRuangan": "002.6.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 115,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 9,
        "kodeRuangan": "002.6.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 116,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 10,
        "kodeRuangan": "002.6.10",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 117,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 11,
        "kodeRuangan": "002.6.11",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 118,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 12,
        "kodeRuangan": "002.6.12",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 119,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 13,
        "kodeRuangan": "002.6.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 120,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 6,
        "ruangan": 14,
        "kodeRuangan": "002.6.14",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 121,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 1,
        "kodeRuangan": "002.7.01",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 122,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 2,
        "kodeRuangan": "002.7.02",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 123,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 3,
        "kodeRuangan": "002.7.03",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 124,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 4,
        "kodeRuangan": "002.7.04",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 125,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 5,
        "kodeRuangan": "002.7.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 126,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 6,
        "kodeRuangan": "002.7.06",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 127,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 7,
        "kodeRuangan": "002.7.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 128,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 8,
        "kodeRuangan": "002.7.08",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 129,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 9,
        "kodeRuangan": "002.7.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 130,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 10,
        "kodeRuangan": "002.7.10",
        "namaRuangan": "Ruang Baca",
        "koordinat": null
      },
      {
        "id": 131,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 11,
        "kodeRuangan": "002.7.11",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 132,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 7,
        "ruangan": 12,
        "kodeRuangan": "002.7.12",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 133,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 8,
        "ruangan": 1,
        "kodeRuangan": "002.8.01",
        "namaRuangan": "Ruang Himpunan Mahasiswa Jurusan",
        "koordinat": null
      },
      {
        "id": 134,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 8,
        "ruangan": 2,
        "kodeRuangan": "002.8.02",
        "namaRuangan": "Koridor (ditutup)",
        "koordinat": null
      },
      {
        "id": 135,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 8,
        "ruangan": 14,
        "kodeRuangan": "002.8.14",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 136,
        "kodeGedung": "002",
        "namaGedung": "Gedung Matematika",
        "lantai": 8,
        "ruangan": 15,
        "kodeRuangan": "002.8.15",
        "namaRuangan": "Lift",
        "koordinat": null
      }
    ]
  },
  "003": {
    "kodeGedung": "003",
    "namaGedung": "Gedung Kimia",
    "namaSingkat": "Kimia",
    "sheetName": "003 Kimia",
    "totalLantai": 10,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalRuangan": 113,
    "koordinat": null,
    "ruangan": [
      {
        "id": 137,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "003.1.01",
        "namaRuangan": "Ruang Administrasi Jurusan",
        "koordinat": null
      },
      {
        "id": 138,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "003.1.02",
        "namaRuangan": "Ruang Tunggu",
        "koordinat": null
      },
      {
        "id": 139,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "003.1.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 140,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "003.1.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 141,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "003.1.05",
        "namaRuangan": "Toilet Dosen A",
        "koordinat": null
      },
      {
        "id": 142,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "003.1.06",
        "namaRuangan": "Toilet Dosen B",
        "koordinat": null
      },
      {
        "id": 143,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "003.1.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 144,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "003.1.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 145,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "003.1.09",
        "namaRuangan": "Ruang Control",
        "koordinat": null
      },
      {
        "id": 146,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "003.1.10",
        "namaRuangan": "Ruang Kepala Lab Kimia",
        "koordinat": null
      },
      {
        "id": 147,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "003.1.11",
        "namaRuangan": "Ruang Ketua Prodi Kimia",
        "koordinat": null
      },
      {
        "id": 148,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 12,
        "kodeRuangan": "003.1.12",
        "namaRuangan": "Ruang Ketua Prodi Pendidikan Kimia",
        "koordinat": null
      },
      {
        "id": 149,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 13,
        "kodeRuangan": "003.1.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 150,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "003.1.14",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 151,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": 15,
        "kodeRuangan": "003.1.15",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 152,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "003.1",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 153,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "003.2.01",
        "namaRuangan": "Ruang Penguji A",
        "koordinat": null
      },
      {
        "id": 154,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "003.2.02",
        "namaRuangan": "Ruang Micro Teaching A",
        "koordinat": null
      },
      {
        "id": 155,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "003.2.03",
        "namaRuangan": "Ruang Mikroteaching B",
        "koordinat": null
      },
      {
        "id": 156,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "003.2.04",
        "namaRuangan": "Ruang Penguji B",
        "koordinat": null
      },
      {
        "id": 157,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "003.2.05",
        "namaRuangan": "Ruang Penguji C",
        "koordinat": null
      },
      {
        "id": 158,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "003.2.06",
        "namaRuangan": "Ruang Microteaching C",
        "koordinat": null
      },
      {
        "id": 159,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "003.2.07",
        "namaRuangan": "Ruang Ketua Prodi S2 Kimia",
        "koordinat": null
      },
      {
        "id": 160,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "003.2.08",
        "namaRuangan": "Ruang Ketua Prodi S2 Pendidikan Kimia",
        "koordinat": null
      },
      {
        "id": 161,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "003.2.09",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 162,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "003.2.10",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 163,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "003.2.11",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 164,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "003.2.12",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 165,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 13,
        "kodeRuangan": "003.2.13",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 166,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 14,
        "kodeRuangan": "003.2.14",
        "namaRuangan": "Ruang Rapat Jurusan",
        "koordinat": null
      },
      {
        "id": 167,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 15,
        "kodeRuangan": "003.2.15",
        "namaRuangan": "Ruang Penguji D",
        "koordinat": null
      },
      {
        "id": 168,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 16,
        "kodeRuangan": "003.2.16",
        "namaRuangan": "Ruang Microteaching D",
        "koordinat": null
      },
      {
        "id": 169,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 17,
        "kodeRuangan": "003.2.17",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 170,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 18,
        "kodeRuangan": "003.2.18",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 171,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": 19,
        "kodeRuangan": "003.2.19",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 172,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "003.2",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 173,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "003.3.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 174,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "003.3.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 175,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "003.3.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 176,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "003.3.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 177,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "003.3.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 178,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "003.3.07",
        "namaRuangan": "Toilet Difabel",
        "koordinat": null
      },
      {
        "id": 179,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "003.3.08",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 180,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "003.3.09",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 181,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "003.3.10",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 182,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "003.3.11",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 183,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "003.3",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 184,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "003.4.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 185,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "003.4.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 186,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 3,
        "kodeRuangan": "003.4.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 187,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "003.4.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 188,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "003.4.05",
        "namaRuangan": "Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 189,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "003.4.06",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 190,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 7,
        "kodeRuangan": "003.4.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 191,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 8,
        "kodeRuangan": "003.4.08",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 192,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "003.4.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 193,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": 10,
        "kodeRuangan": "003.4.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 194,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": null,
        "kodeRuangan": "003.4",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 195,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 4,
        "ruangan": null,
        "kodeRuangan": "003.4",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 196,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 1,
        "kodeRuangan": "003.5.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 197,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 2,
        "kodeRuangan": "003.5.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 198,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 3,
        "kodeRuangan": "003.5.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 199,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 4,
        "kodeRuangan": "003.5.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 200,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 5,
        "kodeRuangan": "003.5.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 201,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 6,
        "kodeRuangan": "003.5.06",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 202,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 7,
        "kodeRuangan": "003.5.07",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 203,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 8,
        "kodeRuangan": "003.5.08",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 204,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 9,
        "kodeRuangan": "003.5.09",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 205,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 10,
        "kodeRuangan": "003.5.10",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 206,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": 11,
        "kodeRuangan": "003.5.11",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 207,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 5,
        "ruangan": null,
        "kodeRuangan": "003.5",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 208,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 1,
        "kodeRuangan": "003.6.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 209,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 2,
        "kodeRuangan": "003.6.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 210,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 3,
        "kodeRuangan": "003.6.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 211,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 4,
        "kodeRuangan": "003.6.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 212,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 5,
        "kodeRuangan": "003.6.05",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 213,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 6,
        "kodeRuangan": "003.6.06",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 214,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 7,
        "kodeRuangan": "003.6.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 215,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 8,
        "kodeRuangan": "003.6.08",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 216,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 9,
        "kodeRuangan": "003.6.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 217,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": 10,
        "kodeRuangan": "003.6.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 218,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 6,
        "ruangan": null,
        "kodeRuangan": "003.6",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 219,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 1,
        "kodeRuangan": "003.7.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 220,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 2,
        "kodeRuangan": "003.7.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 221,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 3,
        "kodeRuangan": "003.7.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 222,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 4,
        "kodeRuangan": "003.7.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 223,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 5,
        "kodeRuangan": "003.7.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 224,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 6,
        "kodeRuangan": "003.7.06",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 225,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 7,
        "kodeRuangan": "003.7.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 226,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 8,
        "kodeRuangan": "003.7.08",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 227,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 9,
        "kodeRuangan": "003.7.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 228,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": 10,
        "kodeRuangan": "003.7.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 229,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": "xx",
        "kodeRuangan": "003.7.xx",
        "namaRuangan": "Ruang Janitor",
        "koordinat": null
      },
      {
        "id": 230,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 7,
        "ruangan": null,
        "kodeRuangan": "003.7",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 231,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": 1,
        "kodeRuangan": "003.8.01",
        "namaRuangan": "Ruang Diskusi",
        "koordinat": null
      },
      {
        "id": 232,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": 2,
        "kodeRuangan": "003.8.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 233,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": 3,
        "kodeRuangan": "003.8.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 234,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": 4,
        "kodeRuangan": "003.8.04",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 235,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": 5,
        "kodeRuangan": "003.8.05",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 236,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 8,
        "ruangan": null,
        "kodeRuangan": "003.8",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 237,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": 1,
        "kodeRuangan": "003.9.01",
        "namaRuangan": "Ruang Diskusi",
        "koordinat": null
      },
      {
        "id": 238,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": 2,
        "kodeRuangan": "003.9.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 239,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": 3,
        "kodeRuangan": "003.9.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 240,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": 4,
        "kodeRuangan": "003.9.04",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 241,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": 5,
        "kodeRuangan": "003.9.05",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 242,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 9,
        "ruangan": null,
        "kodeRuangan": "003.9",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 243,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 1,
        "kodeRuangan": "003.10.01",
        "namaRuangan": "Ruang Komunitas Mahasiswa",
        "koordinat": null
      },
      {
        "id": 244,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 2,
        "kodeRuangan": "003.10.02",
        "namaRuangan": "Ruang Pre Function",
        "koordinat": null
      },
      {
        "id": 245,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 3,
        "kodeRuangan": "003.10.03",
        "namaRuangan": "Ruang Serbaguna",
        "koordinat": null
      },
      {
        "id": 246,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 4,
        "kodeRuangan": "003.10.04",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 247,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 5,
        "kodeRuangan": "003.10.05",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 248,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": 6,
        "kodeRuangan": "003.10.06",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 249,
        "kodeGedung": "003",
        "namaGedung": "Gedung Kimia",
        "lantai": 10,
        "ruangan": null,
        "kodeRuangan": "003.10",
        "namaRuangan": "Lobby",
        "koordinat": null
      }
    ]
  },
  "004": {
    "kodeGedung": "004",
    "namaGedung": "Gedung Fisika",
    "namaSingkat": "Fisika",
    "sheetName": "004 Fisika",
    "totalLantai": 8,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalRuangan": 96,
    "koordinat": null,
    "ruangan": [
      {
        "id": 250,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "004.1.01",
        "namaRuangan": "Ruang Administrasi Jurusan",
        "koordinat": null
      },
      {
        "id": 251,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "004.1.02",
        "namaRuangan": "Ruang Tunggu",
        "koordinat": null
      },
      {
        "id": 252,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "004.1.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 253,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "004.1.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 254,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "004.1.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 255,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "004.1.06",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 256,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "004.1.07",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 257,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "004.1.08",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 258,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "004.1.09",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 259,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "004.1.10",
        "namaRuangan": "Ruang Rapat Jurusan",
        "koordinat": null
      },
      {
        "id": 260,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "004.1.11",
        "namaRuangan": "Ruang Kepala Prodi Pendidikan Fisika",
        "koordinat": null
      },
      {
        "id": 261,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 12,
        "kodeRuangan": "004.1.12",
        "namaRuangan": "Ruang Kepala Prodi Fisika",
        "koordinat": null
      },
      {
        "id": 262,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 13,
        "kodeRuangan": "004.1.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 263,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "004.1.14",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 264,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "004.2.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 265,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "004.2.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 266,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "004.2.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 267,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "004.2.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 268,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "004.2.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 269,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "004.2.06",
        "namaRuangan": "Toilet Difable",
        "koordinat": null
      },
      {
        "id": 270,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "004.2.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 271,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "004.2.08",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 272,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "004.2.09",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 273,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "004.2.10",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 274,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "004.2.11",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 275,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "004.3.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 276,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "004.3.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 277,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "004.3.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 278,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "004.3.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 279,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "004.3.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 280,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "004.3.06",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 281,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "004.3.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 282,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "004.3.08",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 283,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "004.3.09",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 284,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "004.3.10",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 285,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "004.3.11",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 286,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 3,
        "ruangan": 12,
        "kodeRuangan": "004.3.12",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 287,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "004.4.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 288,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "004.4.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 289,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "004.4.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 290,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "004.4.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 291,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "004.4.06",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 292,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 7,
        "kodeRuangan": "004.4.07",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 293,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 8,
        "kodeRuangan": "004.4.08",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 294,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "004.4.09",
        "namaRuangan": "Ruang Penguji A",
        "koordinat": null
      },
      {
        "id": 295,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 10,
        "kodeRuangan": "004.4.10",
        "namaRuangan": "Ruang Micro Teaching A",
        "koordinat": null
      },
      {
        "id": 296,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 11,
        "kodeRuangan": "004.4.11",
        "namaRuangan": "Ruang Micro Teaching B",
        "koordinat": null
      },
      {
        "id": 297,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 12,
        "kodeRuangan": "004.4.12",
        "namaRuangan": "Ruang Penguji B",
        "koordinat": null
      },
      {
        "id": 298,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 13,
        "kodeRuangan": "004.4.13",
        "namaRuangan": "Ruang Penguji C",
        "koordinat": null
      },
      {
        "id": 299,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 14,
        "kodeRuangan": "004.4.14",
        "namaRuangan": "Ruang Microteaching C",
        "koordinat": null
      },
      {
        "id": 300,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 15,
        "kodeRuangan": "004.4.15",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 301,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 4,
        "ruangan": 16,
        "kodeRuangan": "004.4.16",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 302,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 1,
        "kodeRuangan": "004.5.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 303,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 2,
        "kodeRuangan": "004.5.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 304,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 3,
        "kodeRuangan": "004.5.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 305,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 4,
        "kodeRuangan": "004.5.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 306,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 5,
        "kodeRuangan": "004.5.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 307,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 6,
        "kodeRuangan": "004.5.06",
        "namaRuangan": "Ruang Control",
        "koordinat": null
      },
      {
        "id": 308,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 7,
        "kodeRuangan": "004.5.07",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 309,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 8,
        "kodeRuangan": "004.5.08",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 310,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 9,
        "kodeRuangan": "004.5.09",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 311,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 10,
        "kodeRuangan": "004.5.10",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 312,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 11,
        "kodeRuangan": "004.5.11",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 313,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 5,
        "ruangan": 12,
        "kodeRuangan": "004.5.12",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 314,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 1,
        "kodeRuangan": "004.6.01",
        "namaRuangan": "Ruang Dosen A",
        "koordinat": null
      },
      {
        "id": 315,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 2,
        "kodeRuangan": "004.6.02",
        "namaRuangan": "Ruang Dosen B",
        "koordinat": null
      },
      {
        "id": 316,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 3,
        "kodeRuangan": "004.6.03",
        "namaRuangan": "Ruang Dosen C",
        "koordinat": null
      },
      {
        "id": 317,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 4,
        "kodeRuangan": "004.6.04",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 318,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 5,
        "kodeRuangan": "004.6.05",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 319,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 6,
        "kodeRuangan": "004.6.06",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 320,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 7,
        "kodeRuangan": "004.6.07",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 321,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 8,
        "kodeRuangan": "004.6.08",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 322,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 9,
        "kodeRuangan": "004.6.09",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 323,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 10,
        "kodeRuangan": "004.6.10",
        "namaRuangan": "Ruang Dosen D",
        "koordinat": null
      },
      {
        "id": 324,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 11,
        "kodeRuangan": "004.6.11",
        "namaRuangan": "Ruang Dosen E",
        "koordinat": null
      },
      {
        "id": 325,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 12,
        "kodeRuangan": "004.6.12",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 326,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 6,
        "ruangan": 13,
        "kodeRuangan": "004.6.13",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 327,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 1,
        "kodeRuangan": "004.7.01",
        "namaRuangan": "Ruang Dosen A",
        "koordinat": null
      },
      {
        "id": 328,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 2,
        "kodeRuangan": "004.7.02",
        "namaRuangan": "Ruang Dosen B",
        "koordinat": null
      },
      {
        "id": 329,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 3,
        "kodeRuangan": "004.7.03",
        "namaRuangan": "Ruang Dosen C",
        "koordinat": null
      },
      {
        "id": 330,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 4,
        "kodeRuangan": "004.7.04",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 331,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 5,
        "kodeRuangan": "004.7.05",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 332,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 6,
        "kodeRuangan": "004.7.06",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 333,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 7,
        "kodeRuangan": "004.7.07",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 334,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 8,
        "kodeRuangan": "004.7.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 335,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 9,
        "kodeRuangan": "004.7.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 336,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 10,
        "kodeRuangan": "004.7.10",
        "namaRuangan": "Toilet Dosen",
        "koordinat": null
      },
      {
        "id": 337,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 11,
        "kodeRuangan": "004.7.11",
        "namaRuangan": "Ruang Dosen D",
        "koordinat": null
      },
      {
        "id": 338,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 12,
        "kodeRuangan": "004.7.12",
        "namaRuangan": "Ruang Dosen E",
        "koordinat": null
      },
      {
        "id": 339,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 13,
        "kodeRuangan": "004.7.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 340,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 7,
        "ruangan": 14,
        "kodeRuangan": "004.7.14",
        "namaRuangan": "Lift",
        "koordinat": null
      },
      {
        "id": 341,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 8,
        "ruangan": 1,
        "kodeRuangan": "004.8.01",
        "namaRuangan": "Ruang Komunitas",
        "koordinat": null
      },
      {
        "id": 342,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 8,
        "ruangan": 2,
        "kodeRuangan": "004.8.02",
        "namaRuangan": "Ruang Pre Function",
        "koordinat": null
      },
      {
        "id": 343,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 8,
        "ruangan": 3,
        "kodeRuangan": "004.8.03",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 344,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 8,
        "ruangan": 4,
        "kodeRuangan": "004.8.04",
        "namaRuangan": "Ruang Serbaguna",
        "koordinat": null
      },
      {
        "id": 345,
        "kodeGedung": "004",
        "namaGedung": "Gedung Fisika",
        "lantai": 8,
        "ruangan": 5,
        "kodeRuangan": "004.8.05",
        "namaRuangan": "Lift",
        "koordinat": null
      }
    ]
  },
  "005": {
    "kodeGedung": "005",
    "namaGedung": "Gedung Biologi",
    "namaSingkat": "Biologi",
    "sheetName": "005 Biologi",
    "totalLantai": 10,
    "daftarLantai": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalRuangan": 99,
    "koordinat": null,
    "ruangan": [
      {
        "id": 346,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "005.1.01",
        "namaRuangan": "Ruang Administrasi Jurusan",
        "koordinat": null
      },
      {
        "id": 347,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "005.1.02",
        "namaRuangan": "Ruang Tunggu",
        "koordinat": null
      },
      {
        "id": 348,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": "02.1",
        "kodeRuangan": "005.1.02.1",
        "namaRuangan": "Ruang Sekretaris Jurusan",
        "koordinat": null
      },
      {
        "id": 349,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": "02.2",
        "kodeRuangan": "005.1.02.2",
        "namaRuangan": "Ruang Ketua Jurusan",
        "koordinat": null
      },
      {
        "id": 350,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": "02.3",
        "kodeRuangan": "005.1.02.3",
        "namaRuangan": "Ruang Rapat Fungsionaris",
        "koordinat": null
      },
      {
        "id": 351,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "005.1.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 352,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "005.1.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 353,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "005.1.05",
        "namaRuangan": "Toilet Dosen A",
        "koordinat": null
      },
      {
        "id": 354,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "005.1.06",
        "namaRuangan": "Toilet Dosen B",
        "koordinat": null
      },
      {
        "id": 355,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "005.1.07",
        "namaRuangan": "Panel",
        "koordinat": null
      },
      {
        "id": 356,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "005.1.08",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 357,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "005.1.09",
        "namaRuangan": "Ruang Control",
        "koordinat": null
      },
      {
        "id": 358,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "005.1.10",
        "namaRuangan": "Ruang Kaprodi Pendidikan Biologi",
        "koordinat": null
      },
      {
        "id": 359,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "005.1.11",
        "namaRuangan": "Ruang Kaprodi Pendidikan IPA",
        "koordinat": null
      },
      {
        "id": 360,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 12,
        "kodeRuangan": "005.1.12",
        "namaRuangan": "Ruang Kaprodi Biologi",
        "koordinat": null
      },
      {
        "id": 361,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 13,
        "kodeRuangan": "005.1.13",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 362,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "005.1.14",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 363,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 1,
        "ruangan": 15,
        "kodeRuangan": "005.1.15",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 364,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "005.2.01",
        "namaRuangan": "Ruang Penguji A",
        "koordinat": null
      },
      {
        "id": 365,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "005.2.02",
        "namaRuangan": "Ruang Mikroteaching A",
        "koordinat": null
      },
      {
        "id": 366,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "005.2.03",
        "namaRuangan": "Ruang Mikroteaching B",
        "koordinat": null
      },
      {
        "id": 367,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "005.2.04",
        "namaRuangan": "Ruang Penguji B",
        "koordinat": null
      },
      {
        "id": 368,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "005.2.05",
        "namaRuangan": "Ruang Penguji C",
        "koordinat": null
      },
      {
        "id": 369,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "005.2.06",
        "namaRuangan": "Mikroteaching C",
        "koordinat": null
      },
      {
        "id": 370,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "005.2.07",
        "namaRuangan": "Ruang Kaprodi S2 Pendidikan Biologi",
        "koordinat": null
      },
      {
        "id": 371,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "005.2.08",
        "namaRuangan": "Ruang Baca",
        "koordinat": null
      },
      {
        "id": 372,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "005.2.09",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 373,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "005.2.10",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 374,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "005.2.11",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 375,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "005.2.12",
        "namaRuangan": "Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 376,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 14,
        "kodeRuangan": "005.2.14",
        "namaRuangan": "Ruang Rapat Jurusan",
        "koordinat": null
      },
      {
        "id": 377,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 15,
        "kodeRuangan": "005.2.15",
        "namaRuangan": "Ruang Penguji D",
        "koordinat": null
      },
      {
        "id": 378,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 16,
        "kodeRuangan": "005.2.16",
        "namaRuangan": "Ruang Mikroteaching D",
        "koordinat": null
      },
      {
        "id": 379,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 17,
        "kodeRuangan": "005.2.17",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 380,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 18,
        "kodeRuangan": "005.2.18",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 381,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 2,
        "ruangan": 19,
        "kodeRuangan": "005.2.19",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 382,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "005.3.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 383,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "005.3.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 384,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "005.3.03",
        "namaRuangan": "Toilet Cewek",
        "koordinat": null
      },
      {
        "id": 385,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "005.3.04",
        "namaRuangan": "Toilet Cowok",
        "koordinat": null
      },
      {
        "id": 386,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "005.3.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 387,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "005.3.07",
        "namaRuangan": "Toilet Difabel",
        "koordinat": null
      },
      {
        "id": 388,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "005.3.08",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 389,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "005.3.09",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 390,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "005.3.10",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 391,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "005.3.11",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 392,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "005.4.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 393,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "005.4.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 394,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 3,
        "kodeRuangan": "005.4.03",
        "namaRuangan": "Toilet Cewek",
        "koordinat": null
      },
      {
        "id": 395,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "005.4.04",
        "namaRuangan": "Toilet Cowok",
        "koordinat": null
      },
      {
        "id": 396,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "005.4.05",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 397,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "005.4.06",
        "namaRuangan": "Tempat Wudhu",
        "koordinat": null
      },
      {
        "id": 398,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 7,
        "kodeRuangan": "005.4.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 399,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 8,
        "kodeRuangan": "005.4.08",
        "namaRuangan": "Tangga Darurat",
        "koordinat": null
      },
      {
        "id": 400,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "005.4.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 401,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 4,
        "ruangan": 10,
        "kodeRuangan": "005.4.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 402,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 1,
        "kodeRuangan": "005.5.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 403,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 2,
        "kodeRuangan": "005.5.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 404,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 3,
        "kodeRuangan": "005.5.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 405,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 4,
        "kodeRuangan": "005.5.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 406,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 5,
        "kodeRuangan": "005.5.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 407,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 8,
        "kodeRuangan": "005.5.08",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 408,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 9,
        "kodeRuangan": "005.5.09",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 409,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 10,
        "kodeRuangan": "005.5.10",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 410,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 5,
        "ruangan": 11,
        "kodeRuangan": "005.5.11",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 411,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 1,
        "kodeRuangan": "005.6.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 412,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 2,
        "kodeRuangan": "005.6.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 413,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 3,
        "kodeRuangan": "005.6.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 414,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 4,
        "kodeRuangan": "005.6.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 415,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 6,
        "kodeRuangan": "005.6.06",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 416,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 7,
        "kodeRuangan": "005.6.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 417,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 8,
        "kodeRuangan": "005.6.08",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 418,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 9,
        "kodeRuangan": "005.6.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 419,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 6,
        "ruangan": 10,
        "kodeRuangan": "005.6.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 420,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 1,
        "kodeRuangan": "005.7.01",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 421,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 2,
        "kodeRuangan": "005.7.02",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 422,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 3,
        "kodeRuangan": "005.7.03",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 423,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 4,
        "kodeRuangan": "005.7.04",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 424,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 5,
        "kodeRuangan": "005.7.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 425,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 7,
        "kodeRuangan": "005.7.07",
        "namaRuangan": "Ruang Kelas",
        "koordinat": null
      },
      {
        "id": 426,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 8,
        "kodeRuangan": "005.7.08",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 427,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 9,
        "kodeRuangan": "005.7.09",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 428,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 7,
        "ruangan": 10,
        "kodeRuangan": "005.7.10",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 429,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 8,
        "ruangan": 1,
        "kodeRuangan": "005.8.01",
        "namaRuangan": "Ruang Diskusi",
        "koordinat": null
      },
      {
        "id": 430,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 8,
        "ruangan": 2,
        "kodeRuangan": "005.8.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 431,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 8,
        "ruangan": 3,
        "kodeRuangan": "005.8.03",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 432,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 8,
        "ruangan": 4,
        "kodeRuangan": "005.8.04",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 433,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 8,
        "ruangan": 5,
        "kodeRuangan": "005.8.05",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 434,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 9,
        "ruangan": 1,
        "kodeRuangan": "005.9.01",
        "namaRuangan": "Ruang Diskusi",
        "koordinat": null
      },
      {
        "id": 435,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 9,
        "ruangan": 2,
        "kodeRuangan": "005.9.02",
        "namaRuangan": "Ruang Dosen",
        "koordinat": null
      },
      {
        "id": 436,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 9,
        "ruangan": 3,
        "kodeRuangan": "005.9.03",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 437,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 9,
        "ruangan": 4,
        "kodeRuangan": "005.9.04",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 438,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 9,
        "ruangan": 5,
        "kodeRuangan": "005.9.05",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      },
      {
        "id": 439,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 1,
        "kodeRuangan": "005.10.01",
        "namaRuangan": "Ruang Komunitas Mahasiswa",
        "koordinat": null
      },
      {
        "id": 440,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 2,
        "kodeRuangan": "005.10.02",
        "namaRuangan": "Ruang Pre Function",
        "koordinat": null
      },
      {
        "id": 441,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 3,
        "kodeRuangan": "005.10.03",
        "namaRuangan": "Ruang Serbaguna",
        "koordinat": null
      },
      {
        "id": 442,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 4,
        "kodeRuangan": "005.10.04",
        "namaRuangan": "Tangga",
        "koordinat": null
      },
      {
        "id": 443,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 5,
        "kodeRuangan": "005.10.05",
        "namaRuangan": "Lift Mahasiswa",
        "koordinat": null
      },
      {
        "id": 444,
        "kodeGedung": "005",
        "namaGedung": "Gedung Biologi",
        "lantai": 10,
        "ruangan": 6,
        "kodeRuangan": "005.10.06",
        "namaRuangan": "Lift Dosen",
        "koordinat": null
      }
    ]
  },
  "006": {
    "kodeGedung": "006",
    "namaGedung": "Gedung Bilingual",
    "namaSingkat": "Bilingual",
    "sheetName": "006 Bilingual",
    "totalLantai": 2,
    "daftarLantai": [
      1,
      2
    ],
    "totalRuangan": 21,
    "koordinat": null,
    "ruangan": [
      {
        "id": 445,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "006.1.01 A",
        "namaRuangan": "Ruang",
        "koordinat": null
      },
      {
        "id": 446,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "006.1.03",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 447,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "006.1.04",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 448,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "006.1.05",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 449,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "006.1.05",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 450,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "006.1.06",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 451,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "006.1.07",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 452,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "006.1.08",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 453,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "006.1.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 454,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "006.1.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 455,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "006.2.01 A",
        "namaRuangan": "Billing Office",
        "koordinat": null
      },
      {
        "id": 456,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "006.2.02",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 457,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "006.2.03",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 458,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "006.2.04",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 459,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "006.2.04",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 460,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "006.2.05",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 461,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "006.2.06",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 462,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "006.2.07",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 463,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "006.2.08",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 464,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "006.2.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 465,
        "kodeGedung": "006",
        "namaGedung": "Gedung Bilingual",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "006.2.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      }
    ]
  },
  "007": {
    "kodeGedung": "007",
    "namaGedung": "Gedung Lab Kimia",
    "namaSingkat": "Lab Kimia",
    "sheetName": "007 Lab Kimia",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 34,
    "koordinat": null,
    "ruangan": [
      {
        "id": 466,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "007.1.01",
        "namaRuangan": "Ruang Penelitian Kimia Fisika dan Anorganik",
        "koordinat": null
      },
      {
        "id": 467,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "007.1.02",
        "namaRuangan": "Ruang Praktikum Kimia Umum",
        "koordinat": null
      },
      {
        "id": 468,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "007.1.03",
        "namaRuangan": "Ruang",
        "koordinat": null
      },
      {
        "id": 469,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "007.1.06",
        "namaRuangan": "Ruang Persiapan Lt. 1 dan Dapur",
        "koordinat": null
      },
      {
        "id": 470,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "007.1.08",
        "namaRuangan": "Ruang Praktikum Kimia Umum",
        "koordinat": null
      },
      {
        "id": 471,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "007.1.11",
        "namaRuangan": "Ruang Seminar Lab Kimia",
        "koordinat": null
      },
      {
        "id": 472,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "007.1.14",
        "namaRuangan": "Ruang Penelitian",
        "koordinat": null
      },
      {
        "id": 473,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 15,
        "kodeRuangan": "007.1.15",
        "namaRuangan": "Ruang Instrumen AAS",
        "koordinat": null
      },
      {
        "id": 474,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": 16,
        "kodeRuangan": "007.1.16",
        "namaRuangan": "Ruang Asisten Praktikum Kimia Umum",
        "koordinat": null
      },
      {
        "id": 475,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "007.1.xx",
        "namaRuangan": "Ruang",
        "koordinat": null
      },
      {
        "id": 476,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "007.1",
        "namaRuangan": "Hall",
        "koordinat": null
      },
      {
        "id": 477,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "007.2.01",
        "namaRuangan": "Ruang Praktikum Kimia Fisika",
        "koordinat": null
      },
      {
        "id": 478,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "007.2.02",
        "namaRuangan": "Ruang Penelitian Kimia Komputasi",
        "koordinat": null
      },
      {
        "id": 479,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "007.2.03",
        "namaRuangan": "Ruang Praktikum Komputer",
        "koordinat": null
      },
      {
        "id": 480,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "007.2.07",
        "namaRuangan": "Ruang Persiapan Lt. 2",
        "koordinat": null
      },
      {
        "id": 481,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "007.2.10",
        "namaRuangan": "Ruang Praktikum Biokimia",
        "koordinat": null
      },
      {
        "id": 482,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "007.2.11",
        "namaRuangan": "Ruang Kepala Laboratorium",
        "koordinat": null
      },
      {
        "id": 483,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "007.2.12",
        "namaRuangan": "Ruang Praktikum Kimia Anorganik",
        "koordinat": null
      },
      {
        "id": 484,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 14,
        "kodeRuangan": "007.2.14",
        "namaRuangan": "Ruang Instrumen GC dan HAL",
        "koordinat": null
      },
      {
        "id": 485,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 15,
        "kodeRuangan": "007.2.15",
        "namaRuangan": "Ruang Asisten Praktikum Kimia Fisika dan Anorganik",
        "koordinat": null
      },
      {
        "id": 486,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": 16,
        "kodeRuangan": "007.2.16",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 487,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": "xx",
        "kodeRuangan": "007.2.xx",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 488,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "007.2",
        "namaRuangan": "Hall",
        "koordinat": null
      },
      {
        "id": 489,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "007.3.01",
        "namaRuangan": "Ruang Praktikum Kimia Analitik",
        "koordinat": null
      },
      {
        "id": 490,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "007.3.02",
        "namaRuangan": "Ruang Penelitian Kimia Organik Bahan Alam",
        "koordinat": null
      },
      {
        "id": 491,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "007.3.03",
        "namaRuangan": "Ruang Penelitian Biokimia Kimia Organik dan Kimia",
        "koordinat": null
      },
      {
        "id": 492,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "007.3.06",
        "namaRuangan": "Ruang Asisten Praktikum Kimia Organik Biokimia dan Kimia Analitik",
        "koordinat": null
      },
      {
        "id": 493,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "007.3.07",
        "namaRuangan": "Ruang Instrumen UV-Vis Spektrofotometer",
        "koordinat": null
      },
      {
        "id": 494,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "007.3.09",
        "namaRuangan": "Ruang Instrumen",
        "koordinat": null
      },
      {
        "id": 495,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "007.3.11",
        "namaRuangan": "Ruang Praktikum Kimia Organik",
        "koordinat": null
      },
      {
        "id": 496,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 14,
        "kodeRuangan": "007.3.14",
        "namaRuangan": "Ruang Persiapan Lt. 3",
        "koordinat": null
      },
      {
        "id": 497,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": 15,
        "kodeRuangan": "007.3.15",
        "namaRuangan": "Ruang Persiapan Mikrobiologi",
        "koordinat": null
      },
      {
        "id": 498,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": "xx",
        "kodeRuangan": "007.3.xx",
        "namaRuangan": "Ruang Admin Laboran",
        "koordinat": null
      },
      {
        "id": 499,
        "kodeGedung": "007",
        "namaGedung": "Gedung Lab Kimia",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "007.3",
        "namaRuangan": "Hall",
        "koordinat": null
      }
    ]
  },
  "008": {
    "kodeGedung": "008",
    "namaGedung": "Gedung Lab Fisika",
    "namaSingkat": "Lab Fisika",
    "sheetName": "008 Lab Fisika",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 46,
    "koordinat": null,
    "ruangan": [
      {
        "id": 500,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "008.1.01",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 501,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "008.1.02",
        "namaRuangan": "Ruang Rapat",
        "koordinat": null
      },
      {
        "id": 502,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "008.1.03",
        "namaRuangan": "Ruang Penelitian SEM",
        "koordinat": null
      },
      {
        "id": 503,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "008.1.04",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 504,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "008.1.05",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 505,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "008.1.06",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 506,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "008.1.07",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 507,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "008.1.09",
        "namaRuangan": "Ruang Baca",
        "koordinat": null
      },
      {
        "id": 508,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "008.1.10",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 509,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "008.1",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 510,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "008.2.01",
        "namaRuangan": "Laboratorium Listrik",
        "koordinat": null
      },
      {
        "id": 511,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "008.2.03",
        "namaRuangan": "Laboratorium Media Pembelajaran",
        "koordinat": null
      },
      {
        "id": 512,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "008.2.03",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 513,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "008.2.04",
        "namaRuangan": "Laboratorium Komputer",
        "koordinat": null
      },
      {
        "id": 514,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "008.2.05",
        "namaRuangan": "Laboratorium Fisika Bumi",
        "koordinat": null
      },
      {
        "id": 515,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "008.2.06",
        "namaRuangan": "Laboratorium Instrumentasi",
        "koordinat": null
      },
      {
        "id": 516,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "008.2.07",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 517,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "008.2.08",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 518,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "008.2.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 519,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "008.2.10",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 520,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "008.2.11",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 521,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "008.2.12",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 522,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": 13,
        "kodeRuangan": "008.2.13",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 523,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "008.2",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 524,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "008.3.01",
        "namaRuangan": "Ruang Laboratorium Optik",
        "koordinat": null
      },
      {
        "id": 525,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "008.3.02",
        "namaRuangan": "Ruang Asisten Lab",
        "koordinat": null
      },
      {
        "id": 526,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "008.3.03",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 527,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "008.3.04",
        "namaRuangan": "Laboratorium Fisika Umum",
        "koordinat": null
      },
      {
        "id": 528,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "008.3.05",
        "namaRuangan": "Gudang Bahan Habis Pakai",
        "koordinat": null
      },
      {
        "id": 529,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "008.3.06",
        "namaRuangan": "Toilet Wanita",
        "koordinat": null
      },
      {
        "id": 530,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "008.3.07",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 531,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "008.3.08",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 532,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "008.3.09",
        "namaRuangan": "Toilet Pria",
        "koordinat": null
      },
      {
        "id": 533,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "008.3.11",
        "namaRuangan": "Mushola",
        "koordinat": null
      },
      {
        "id": 534,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": 12,
        "kodeRuangan": "008.3.12",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 535,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": "xx",
        "kodeRuangan": "008.3.xx",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 536,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "008.3",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 537,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "008.4.01",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 538,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "008.4.02",
        "namaRuangan": "Ground Tank",
        "koordinat": null
      },
      {
        "id": 539,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 3,
        "kodeRuangan": "008.4.03",
        "namaRuangan": "Ruang Observasi Bintang",
        "koordinat": null
      },
      {
        "id": 540,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "008.4.04",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 541,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "008.4.05",
        "namaRuangan": "Toilet",
        "koordinat": null
      },
      {
        "id": 542,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "008.4.06",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 543,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 7,
        "kodeRuangan": "008.4.07",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 544,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": 8,
        "kodeRuangan": "008.4.08",
        "namaRuangan": "Hall Luar",
        "koordinat": null
      },
      {
        "id": 545,
        "kodeGedung": "008",
        "namaGedung": "Gedung Lab Fisika",
        "lantai": 4,
        "ruangan": null,
        "kodeRuangan": "008.4",
        "namaRuangan": "Koridor",
        "koordinat": null
      }
    ]
  },
  "009": {
    "kodeGedung": "009",
    "namaGedung": "Gedung Lab Komputer",
    "namaSingkat": "Lab Komputer",
    "sheetName": "009 Lab Komputer",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 25,
    "koordinat": null,
    "ruangan": [
      {
        "id": 546,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "009.1.01",
        "namaRuangan": "Lab Jaringan",
        "koordinat": null
      },
      {
        "id": 547,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "009.1.02",
        "namaRuangan": "Ruang HMJ",
        "koordinat": null
      },
      {
        "id": 548,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "009.1.03",
        "namaRuangan": "Ruang Pusat Bisnis",
        "koordinat": null
      },
      {
        "id": 549,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "009.1.04",
        "namaRuangan": "Ruang Riset dan Pengabdian Masyarakat",
        "koordinat": null
      },
      {
        "id": 550,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "009.1.05",
        "namaRuangan": "Ruang Prodi Ilkom",
        "koordinat": null
      },
      {
        "id": 551,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "009.1.06",
        "namaRuangan": "Ruang Pusat Kreativitas",
        "koordinat": null
      },
      {
        "id": 552,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "009.1.07",
        "namaRuangan": "Kamar Mandi",
        "koordinat": null
      },
      {
        "id": 553,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "009.1.08",
        "namaRuangan": "Lab Multimedia",
        "koordinat": null
      },
      {
        "id": 554,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "009.2.01",
        "namaRuangan": "Lab Komputasi dan AI",
        "koordinat": null
      },
      {
        "id": 555,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "009.2.02",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 556,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "009.2.03",
        "namaRuangan": "Ruang Kepala Lab",
        "koordinat": null
      },
      {
        "id": 557,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "009.2.04",
        "namaRuangan": "Ruang Penelitian",
        "koordinat": null
      },
      {
        "id": 558,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "009.2.05",
        "namaRuangan": "Ruang Administrasi",
        "koordinat": null
      },
      {
        "id": 559,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "009.2.06",
        "namaRuangan": "Kamar Mandi",
        "koordinat": null
      },
      {
        "id": 560,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "009.2.07",
        "namaRuangan": "Lab Pemrograman dan Komputasi",
        "koordinat": null
      },
      {
        "id": 561,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "009.2.08",
        "namaRuangan": "Lab R.Listrik & Fisika Modern",
        "koordinat": null
      },
      {
        "id": 562,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "009.3.01",
        "namaRuangan": "Lab Jaringan Komputer dan Rekayasa Lunak",
        "koordinat": null
      },
      {
        "id": 563,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "009.3.02",
        "namaRuangan": "Lab Matematika",
        "koordinat": null
      },
      {
        "id": 564,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "009.3.03",
        "namaRuangan": "Gudang Inventaris",
        "koordinat": null
      },
      {
        "id": 565,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "009.3.04",
        "namaRuangan": "Kamar Perpustakaan",
        "koordinat": null
      },
      {
        "id": 566,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "009.3.05",
        "namaRuangan": "Mushalla",
        "koordinat": null
      },
      {
        "id": 567,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "009.3.06",
        "namaRuangan": "Gudang Bahan 1",
        "koordinat": null
      },
      {
        "id": 568,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "009.3.07",
        "namaRuangan": "Gudang Bahan 2",
        "koordinat": null
      },
      {
        "id": 569,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 8,
        "kodeRuangan": "009.3.08",
        "namaRuangan": "Kamar Mandi",
        "koordinat": null
      },
      {
        "id": 570,
        "kodeGedung": "009",
        "namaGedung": "Gedung Lab Komputer",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "009.3.09",
        "namaRuangan": "Ruang Multimedia dan Game Development",
        "koordinat": null
      }
    ]
  },
  "010": {
    "kodeGedung": "010",
    "namaGedung": "Gedung Lab Biologi",
    "namaSingkat": "Lab Biologi",
    "sheetName": "010 Lab Biologi",
    "totalLantai": 3,
    "daftarLantai": [
      1,
      2,
      3
    ],
    "totalRuangan": 24,
    "koordinat": null,
    "ruangan": [
      {
        "id": 571,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "010.1.01",
        "namaRuangan": "Lab Mikrobiologi",
        "koordinat": null
      },
      {
        "id": 572,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "010.1.03",
        "namaRuangan": "Ruang Furnace",
        "koordinat": null
      },
      {
        "id": 573,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "010.1.04",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 574,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "010.1.05",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 575,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "010.1.06",
        "namaRuangan": "Pantry",
        "koordinat": null
      },
      {
        "id": 576,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "010.1.07",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 577,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "010.1.08",
        "namaRuangan": "Lab Biokimia",
        "koordinat": null
      },
      {
        "id": 578,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "010.1",
        "namaRuangan": "Koridor",
        "koordinat": null
      },
      {
        "id": 579,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "010.2.01",
        "namaRuangan": "Lab Mikroteknik",
        "koordinat": null
      },
      {
        "id": 580,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "010.2.02",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 581,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "010.2.03",
        "namaRuangan": "Gudang Bahan",
        "koordinat": null
      },
      {
        "id": 582,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "010.2.04",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 583,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "010.2.05",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 584,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "010.2.06",
        "namaRuangan": "Gudang Bahan",
        "koordinat": null
      },
      {
        "id": 585,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "010.2.07",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 586,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "010.2.08",
        "namaRuangan": "Lab Struktur dan Perkembangan",
        "koordinat": null
      },
      {
        "id": 587,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "010.2",
        "namaRuangan": "Koridor",
        "koordinat": null
      },
      {
        "id": 588,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "010.3.01",
        "namaRuangan": "Lab Penelitian GCMS",
        "koordinat": null
      },
      {
        "id": 589,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "010.3.02",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 590,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "010.3.04",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 591,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "010.3.05",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 592,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "010.3.06",
        "namaRuangan": "R. Perpustakaan Biologi",
        "koordinat": null
      },
      {
        "id": 593,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "010.3.07",
        "namaRuangan": "Lab Komputer",
        "koordinat": null
      },
      {
        "id": 594,
        "kodeGedung": "010",
        "namaGedung": "Gedung Lab Biologi",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "010.3",
        "namaRuangan": "Koridor",
        "koordinat": null
      }
    ]
  },
  "011": {
    "kodeGedung": "011",
    "namaGedung": "Gedung Lab Bio",
    "namaSingkat": "Lab Bio",
    "sheetName": "011 Lab Bio",
    "totalLantai": 4,
    "daftarLantai": [
      1,
      2,
      3,
      4
    ],
    "totalRuangan": 47,
    "koordinat": null,
    "ruangan": [
      {
        "id": 595,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "011.1.01",
        "namaRuangan": "Ruang Klinik",
        "koordinat": null
      },
      {
        "id": 596,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "011.1.02",
        "namaRuangan": "Lab Genetika",
        "koordinat": null
      },
      {
        "id": 597,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 3,
        "kodeRuangan": "011.1.03",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 598,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 4,
        "kodeRuangan": "011.1.04",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 599,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 5,
        "kodeRuangan": "011.1.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 600,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "011.1.06",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 601,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 6,
        "kodeRuangan": "011.1.06",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 602,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "011.1.07",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 603,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 8,
        "kodeRuangan": "011.1.08",
        "namaRuangan": "Kamar Mandi Difabel",
        "koordinat": null
      },
      {
        "id": 604,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "011.1.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 605,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "011.1.10",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 606,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "011.1.11",
        "namaRuangan": "Lab Fisiologi",
        "koordinat": null
      },
      {
        "id": 607,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 1,
        "ruangan": null,
        "kodeRuangan": "011.1",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 608,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "011.2.01",
        "namaRuangan": "Ruang Kepala Lab",
        "koordinat": null
      },
      {
        "id": 609,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "011.2.02",
        "namaRuangan": "Lab Biosistematik",
        "koordinat": null
      },
      {
        "id": 610,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "011.2.03",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 611,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "011.2.04",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 612,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "011.2.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 613,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "011.2.06",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 614,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "011.2.06",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 615,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "011.2.07",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 616,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "011.2.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 617,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "011.2.10",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 618,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "011.2.11",
        "namaRuangan": "Lab Taksonomi Hewan Vertebrata",
        "koordinat": null
      },
      {
        "id": 619,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 2,
        "ruangan": null,
        "kodeRuangan": "011.2",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 620,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 1,
        "kodeRuangan": "011.3.01",
        "namaRuangan": "Ruang Mikrofotografi",
        "koordinat": null
      },
      {
        "id": 621,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 2,
        "kodeRuangan": "011.3.02",
        "namaRuangan": "Lab Kultur Jaringan",
        "koordinat": null
      },
      {
        "id": 622,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 3,
        "kodeRuangan": "011.3.03",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 623,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 4,
        "kodeRuangan": "011.3.04",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 624,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 5,
        "kodeRuangan": "011.3.05",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 625,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "011.3.06",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 626,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 6,
        "kodeRuangan": "011.3.06",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 627,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 7,
        "kodeRuangan": "011.3.07",
        "namaRuangan": "Kamar Mandi Dosen",
        "koordinat": null
      },
      {
        "id": 628,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 9,
        "kodeRuangan": "011.3.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 629,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 10,
        "kodeRuangan": "011.3.10",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 630,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": 11,
        "kodeRuangan": "011.3.11",
        "namaRuangan": "Lab Biologi Sel dan Molekuler",
        "koordinat": null
      },
      {
        "id": 631,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 3,
        "ruangan": null,
        "kodeRuangan": "011.3",
        "namaRuangan": "Lobby",
        "koordinat": null
      },
      {
        "id": 632,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 1,
        "kodeRuangan": "011.4.01",
        "namaRuangan": "Ruang Rapat Dosen",
        "koordinat": null
      },
      {
        "id": 633,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 2,
        "kodeRuangan": "011.4.02",
        "namaRuangan": "Ruang Laboran",
        "koordinat": null
      },
      {
        "id": 634,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 3,
        "kodeRuangan": "011.4.03",
        "namaRuangan": "Lab Biologi Umum",
        "koordinat": null
      },
      {
        "id": 635,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 4,
        "kodeRuangan": "011.4.04",
        "namaRuangan": "Musholla",
        "koordinat": null
      },
      {
        "id": 636,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 5,
        "kodeRuangan": "011.4.05",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 637,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "011.4.06",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 638,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 6,
        "kodeRuangan": "011.4.06",
        "namaRuangan": "Janitor",
        "koordinat": null
      },
      {
        "id": 639,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "011.4.09",
        "namaRuangan": "Ruang Panel",
        "koordinat": null
      },
      {
        "id": 640,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": 9,
        "kodeRuangan": "011.4.09",
        "namaRuangan": "Lab IPA Terpadu",
        "koordinat": null
      },
      {
        "id": 641,
        "kodeGedung": "011",
        "namaGedung": "Gedung Lab Bio",
        "lantai": 4,
        "ruangan": null,
        "kodeRuangan": "011.4",
        "namaRuangan": "Lobby",
        "koordinat": null
      }
    ]
  },
  "012": {
    "kodeGedung": "012",
    "namaGedung": "Gedung Bersama 12",
    "namaSingkat": "Bersama 12",
    "sheetName": "012 Bersama 12",
    "totalLantai": 2,
    "daftarLantai": [
      1,
      2
    ],
    "totalRuangan": 31,
    "koordinat": null,
    "ruangan": [
      {
        "id": 642,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 1,
        "kodeRuangan": "012.1.01",
        "namaRuangan": "Ruang Tanpa Nama",
        "koordinat": null
      },
      {
        "id": 643,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 2,
        "kodeRuangan": "012.1.02",
        "namaRuangan": "Perpustakaan FMIPA",
        "koordinat": null
      },
      {
        "id": 644,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 7,
        "kodeRuangan": "012.1.07",
        "namaRuangan": "Kantor Dekan",
        "koordinat": null
      },
      {
        "id": 645,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 9,
        "kodeRuangan": "012.1.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 646,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 10,
        "kodeRuangan": "012.1.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 647,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 11,
        "kodeRuangan": "012.1.11",
        "namaRuangan": "Perpustakaan FT",
        "koordinat": null
      },
      {
        "id": 648,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 13,
        "kodeRuangan": "012.1.13",
        "namaRuangan": "Kantor Jurusan PKK",
        "koordinat": null
      },
      {
        "id": 649,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 14,
        "kodeRuangan": "012.1.14",
        "namaRuangan": "Kantor Jurusan Mesin",
        "koordinat": null
      },
      {
        "id": 650,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 15,
        "kodeRuangan": "012.1.15",
        "namaRuangan": "Kantor Wakil Dekan FT",
        "koordinat": null
      },
      {
        "id": 651,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": 16,
        "kodeRuangan": "012.1.16",
        "namaRuangan": "Kantor Tata Usaha",
        "koordinat": null
      },
      {
        "id": 652,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Kamar Mandi Pria",
        "koordinat": null
      },
      {
        "id": 653,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Kamar Mandi Wanita",
        "koordinat": null
      },
      {
        "id": 654,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Kamar Mandi Dekan",
        "koordinat": null
      },
      {
        "id": 655,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Gudang",
        "koordinat": null
      },
      {
        "id": 656,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Toilet Khusus Wakil Dekan & Tenaga Kependidikan",
        "koordinat": null
      },
      {
        "id": 657,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 1,
        "ruangan": "xx",
        "kodeRuangan": "012.1.xx",
        "namaRuangan": "Kantin",
        "koordinat": null
      },
      {
        "id": 658,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 1,
        "kodeRuangan": "012.2.01",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 659,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 2,
        "kodeRuangan": "012.2.02",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 660,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 3,
        "kodeRuangan": "012.2.03",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 661,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 4,
        "kodeRuangan": "012.2.04",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 662,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 5,
        "kodeRuangan": "012.2.05",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 663,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 6,
        "kodeRuangan": "012.2.06",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 664,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 7,
        "kodeRuangan": "012.2.07",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 665,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 8,
        "kodeRuangan": "012.2.08",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 666,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 9,
        "kodeRuangan": "012.2.09",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 667,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 10,
        "kodeRuangan": "012.2.10",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 668,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 11,
        "kodeRuangan": "012.2.11",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 669,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 12,
        "kodeRuangan": "012.2.12",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 670,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 13,
        "kodeRuangan": "012.2.13",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 671,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 14,
        "kodeRuangan": "012.2.14",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      },
      {
        "id": 672,
        "kodeGedung": "012",
        "namaGedung": "Gedung Bersama 12",
        "lantai": 2,
        "ruangan": 15,
        "kodeRuangan": "012.2.15",
        "namaRuangan": "Ruang Kuliah",
        "koordinat": null
      }
    ]
  }
};

/**
 * Ambil daftar ruangan berdasarkan kode gedung
 * @param {string} kodeGedung - Contoh: '001', '002', dst.
 * @returns {Array} Array ruangan milik gedung tersebut
 */
export function getRuanganByGedung(kodeGedung) {
  const kode = String(kodeGedung).trim();
  return dataRuangan.filter(r => r.kodeGedung === kode);
}

/**
 * Ambil daftar ruangan berdasarkan kode gedung dan lantai
 * @param {string} kodeGedung - Contoh: '001', '002', dst.
 * @param {number|string} lantai - Nomor lantai
 * @returns {Array} Array ruangan pada lantai dan gedung tersebut
 */
export function getRuanganByLantai(kodeGedung, lantai) {
  const kode = String(kodeGedung).trim();
  const lt = Number(lantai);
  return dataRuangan.filter(r => r.kodeGedung === kode && r.lantai === lt);
}

/**
 * Ambil metadata satu gedung berdasarkan kode gedung
 * @param {string} kodeGedung - Contoh: '001', '002', dst.
 * @returns {Object|null} Objek informasi gedung
 */
export function getGedungByKode(kodeGedung) {
  const kode = String(kodeGedung).trim();
  return daftarGedung.find(g => g.kodeGedung === kode) || null;
}

/**
 * Cari ruangan berdasarkan kata kunci (nama ruangan atau kode ruangan)
 * @param {string} keyword - Kata kunci pencarian
 * @returns {Array} Array ruangan yang cocok
 */
export function cariRuangan(keyword) {
  if (!keyword) return [];
  const q = String(keyword).toLowerCase().trim();
  return dataRuangan.filter(r =>
    r.namaRuangan.toLowerCase().includes(q) ||
    r.kodeRuangan.toLowerCase().includes(q) ||
    r.namaGedung.toLowerCase().includes(q)
  );
}

// Browser Window Global Compatibility
if (typeof window !== 'undefined') {
  window.dataRuangan = dataRuangan;
  window.daftarGedung = daftarGedung;
  window.dataGedung = dataGedung;
  window.getRuanganByGedung = getRuanganByGedung;
  window.getRuanganByLantai = getRuanganByLantai;
  window.getGedungByKode = getGedungByKode;
  window.cariRuangan = cariRuangan;
}

// CommonJS compatibility (Node.js)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    dataRuangan,
    daftarGedung,
    dataGedung,
    getRuanganByGedung,
    getRuanganByLantai,
    getGedungByKode,
    cariRuangan,
    default: dataRuangan
  };
}

// Default export untuk ES Module
export default dataRuangan;

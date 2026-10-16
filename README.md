# FMIPA Map — Sistem Navigasi Rute Terpendek

**Peta digital interaktif untuk pencarian rute terpendek di area Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA), Universitas Negeri Medan.**

Dikembangkan sebagai proyek **Tugas Mata Kuliah Matematika Diskrit** dengan penerapan **algoritma Dijkstra** untuk mencari jalur optimal antar gedung.

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Proyek](#-struktur-proyek)
- [Cara Menjalankan](#-cara-menjalankan)
- [Algoritma Dijkstra](#-algoritma-dijkstra)
- [Data](#-data)
- [Tim Pengembang](#-tim-pengembang)
- [Informasi Mata Kuliah](#-informasi-mata-kuliah)
- [Lisensi](#-lisensi)

---

## 🗺️ Tentang Proyek

**FMIPA Map** adalah aplikasi web yang membantu mahasiswa, dosen, dan pengunjung FMIPA UNIMED untuk **menemukan rute terpendek** antar gedung di area fakultas. Aplikasi ini juga menyediakan **informasi ruangan** dari 12 gedung dengan total lebih dari **670 ruangan**.

### Latar Belakang

Area FMIPA UNIMED memiliki **12 gedung** dengan tata letak yang kompleks. Mahasiswa baru, pengunjung, atau tamu sering kesulitan menemukan gedung atau ruangan tertentu. FMIPA Map hadir sebagai solusi navigasi berbasis graf yang:
- Menghitung **jalur terpendek** secara otomatis
- Menyediakan **pencarian ruangan** lintas gedung
- Memvisualisasikan rute di **peta interaktif**

### Tujuan

1. Menerapkan **algoritma Dijkstra** pada studi kasus nyata
2. Membangun aplikasi web fungsional untuk navigasi area FMIPA
3. Menyediakan database ruangan yang terintegrasi dengan peta

---

### 🔗 Tautan

- **Repository:** [github.com/muhammadridho7707/shortest-path-fmipa](https://github.com/muhammadridho7707/shortest-path-fmipa)
- **Live Demo (Tester):** [tengkufahreza6-dev.github.io/shortest-path-fmipa-tester](https://tengkufahreza6-dev.github.io/shortest-path-fmipa-tester)

---

## ✨ Fitur Utama

### 🗺️ Peta Interaktif
- Peta area FMIPA dengan 12 gedung
- Zoom, pan, dan kontrol peta
- Marker gedung yang dapat diklik

### 🧭 Pencarian Rute Terpendek
- Pilih gedung asal & tujuan dari dropdown
- Algoritma Dijkstra menghitung jalur optimal
- Visualisasi rute dengan animasi
- Estimasi **jarak (meter)** dan **waktu tempuh**

### 🏢 Database Ruangan
- **672 ruangan** dari **12 gedung**
- Filter per lantai
- Pencarian ruangan berdasarkan **nama** atau **kode**
- Detail: kode ruangan, nama, lantai

### 🔍 Pencarian Ruangan Global
- Cari ruangan di seluruh gedung
- Hasil pencarian menampilkan gedung & lantai
- Tombol "Jadikan Awal" & "Jadikan Tujuan" langsung dari hasil pencarian

### 📸 Export Peta
- Export peta + rute sebagai gambar PNG
- Dilengkapi info jarak & waktu tempuh
- Cocok untuk dibagikan atau dicetak

### 🎨 UI/UX
- Desain modern dengan tema warna khas FMIPA
- Toast notification untuk feedback
- Loading state saat memproses
- Responsif (desktop, tablet, mobile)

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES Modules) |
| **CSS Framework** | Tailwind CSS v4 |
| **Peta** | Leaflet.js v1.9.4 |
| **Algoritma** | Dijkstra (shortest path) |
| **Data Format** | GeoJSON |
| **Export** | html-to-image |
| **Version Control** | Git & GitHub |
| **Deployment** | GitHub Pages / Netlify |
| **Dev Tools** | Node.js, npm, Tailwind CLI |

---

## 📂 Struktur Proyek

```text
shortest-path-fmipa/
├── public/
│   ├── assets/
│   │   ├── edges.geojson
│   │   ├── index.html
│   │   ├── map.png
│   │   ├── map.svg
│   │   ├── nodes.geojson
│   |   └── output.css
│   └── output.css
├── src/
│   └── js/
│       ├── algorithm.js
│       ├── app.js
│       ├── data.js
│       ├── dataruang.js
│       ├── graph.js
│       ├── map.js
│       └── roomMapping.js
├── .gitignore
├── dummy_data.json
├── index.html (untuk Redirect)
├── input.css
├── jalur_fmipa.geojson
├── map-integration.js
├── package-lock.json
├── package.json
├── parse-geojson.mjs
├── README.md
├── tailwind.config.js
└── test-graph.mjs
```

> **Catatan:** Terdapat dua file `output.css` (satu di dalam `public/`, satu lagi di root). Pastikan path yang digunakan di `index.html` sudah sesuai.

---

## 🚀 Cara Menjalankan

### Prasyarat

- **Node.js** v18 atau lebih baru
- **Browser modern** (Chrome, Edge, Firefox, Safari)
- **Text editor** (VS Code direkomendasikan)

### Langkah 1: Clone Repository

```bash
git clone https://github.com/muhammadridho7707/shortest-path-fmipa.git
cd shortest-path-fmipa
```

### Langkah 2: Install Dependensi

```bash
npm install
```

### Langkah 3: Build Tailwind CSS

```bash
npx @tailwindcss/cli -i ./input.css -o ./public/output.css --watch
```

> **Catatan:** Jalankan perintah ini di terminal terpisah agar tetap aktif saat mengedit CSS.

### Langkah 4: Jalankan Live Server

**Opsi A: VS Code Live Server**

1. Install extension Live Server
2. Klik kanan `index.html` → Open with Live Server

**Opsi B: Python HTTP Server**

```bash
python -m http.server 5500
```

**Opsi C: Node.js HTTP Server**

```bash
npx http-server -p 5500
```

Buka browser: `http://127.0.0.1:5500/`

### Langkah 5: Akses Aplikasi

1. Redirect page akan muncul ~3 detik
2. Aplikasi utama terbuka otomatis
3. Mulai gunakan: pilih gedung asal & tujuan → klik "Cari rute"

---

## 🧠 Algoritma Dijkstra

### Kenapa Dijkstra?

Dijkstra adalah algoritma shortest path klasik untuk graf berbobot non-negatif. Cocok untuk:
- Mencari jalur terpendek antar dua titik
- Bobot = jarak dalam meter
- Kompleksitas: O(E log V) dengan priority queue

### Model Graf

- **Node (simpul)** = gedung, pintu, simpang, atau titik penting
- **Edge (sisi)** = jalur antar node, dengan bobot = panjang (meter)
- Graf bersifat **undirected** (bisa dilewati dua arah)

### Implementasi

Lihat file `src/js/algorithm.js`:

```javascript
export function findShortestPath(startNodeId, targetNodeId) {
  const graph = buildFMIPAGraph();
  const result = dijkstra(graph, startNodeId, targetNodeId);
  // ...
}
```

### Flow Algoritma

1. **Inisialisasi:** semua jarak = ∞, jarak node awal = 0
2. **Loop:** ambil node dengan jarak terkecil yang belum dikunjungi
3. **Relaksasi:** perbarui jarak tetangga jika ditemukan jalur lebih pendek
4. **Selesai:** setelah node tujuan tercapai atau semua node dikunjungi
5. **Backtrack:** susun jalur dari tujuan ke awal

### Konversi Jarak

Koordinat QGIS dikonversi ke meter dengan faktor kalibrasi:

```text
QGIS_TO_METER ≈ 0.0468
```

Faktor ini diperoleh dari perbandingan jarak Euclidean QGIS dengan jarak sebenarnya di lapangan.

---

## 📊 Data

### Sumber Data

- **Gedung:** digitasi manual menggunakan QGIS
- **Jalur:** garis-garis jalan setapak, koridor, dan jalur outdoor
- **Ruangan:** dikumpulkan dari pengelola gedung FMIPA

### Ringkasan Data

| Kategori | Jumlah |
|----------|--------|
| Gedung | 12 |
| Node | 100 |
| Edge | 133 |
| Ruangan | 672 |

### Daftar 12 Gedung

| Kode | Nama Gedung | Lantai | Ruangan |
|------|-------------|--------|---------|
| 001 | Gedung Syawal | 4 | 38 |
| 002 | Gedung Matematika | 8 | 98 |
| 003 | Gedung Kimia | 10 | 113 |
| 004 | Gedung Fisika | 8 | 96 |
| 005 | Gedung Biologi | 10 | 99 |
| 006 | Gedung Bilingual | 2 | 21 |
| 007 | Gedung Lab Kimia | 3 | 34 |
| 008 | Gedung Lab Fisika | 4 | 46 |
| 009 | Gedung Lab Komputer | 3 | 25 |
| 010 | Gedung Lab Biologi | 3 | 24 |
| 011 | Gedung Lab Bio | 4 | 47 |
| 012 | Gedung Bersama | 2 | 31 |
| **Total** | | | **672** |

### Regenerate Data

Jika file `nodes.geojson` atau `edges.geojson` diubah:

```bash
node parse-geojson.mjs
```

Ini akan menghasilkan ulang `src/js/data.js`.

---

## 👥 Tim Pengembang

**Kelompok 2 — Kelas PSIK 25B**

| No. | Nama | Peran |
|-----|------|-------|
| 1. | Mutiara Chalista Tarigan | UI/UX Designer & Map Mapper |
| 2. | Muhammad Ridho Reyhan | Project Manager & DevOps |
| 3. | Rachel Aulia | Algorithm Engineer |
| 4. | Siti Zulayka Maulida Amali | Frontend Developer - UI & Styling |
| 5. | Tengku Fahreza | Frontend Developer - Map Integration |
| 6. | Umar Hidayat | Data Engineer - Graph Modeler |

*(Urut berdasarkan abjad nama depan)*

---

## 📚 Informasi Mata Kuliah

| Item | Keterangan |
|------|------------|
| Mata Kuliah | Matematika Diskrit |
| Dosen Pengampu | Dinda Kartika, S.Pd., M.Si. |
| Kelas | PSIK 25B |
| Program Studi | Ilmu Komputer |
| Fakultas | Matematika dan Ilmu Pengetahuan Alam |
| Universitas | Universitas Negeri Medan |
| Tahun Akademik | 2025/2026 |

---

## 📝 Lisensi

Proyek ini dibuat untuk keperluan akademik dalam rangka Tugas Mata Kuliah Matematika Diskrit di Universitas Negeri Medan. Penggunaan untuk keperluan komersial memerlukan izin dari tim pengembang.

---

## 🙏 Ucapan Terima Kasih

- Ibu Dinda Kartika, S.Pd., M.Si. — dosen pengampu mata kuliah Matematika Diskrit
- Pengelola gedung FMIPA UNIMED — atas data ruangan
- OpenStreetMap contributors — atas data peta dasar
- Leaflet.js dan Tailwind CSS — framework open source

---

<p align="center">
  <strong>FMIPA Map</strong><br>
  Universitas Negeri Medan<br>
  <em>2026</em>
</p>
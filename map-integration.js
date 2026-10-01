/**
 * ============================================================================
 * map-integration.js
 * Proyek  : Aplikasi Navigasi Shortest Path FMIPA UNIMED
 * Kuliah  : Matematika Diskrit
 * Penulis : Tengku Fahreza
 * Peran   : Frontend Developer - Map Integration
 * GitHub  : muhammadridho7707/shortest-path-fmipa
 * ============================================================================
 * Deskripsi:
 * Modul integrasi yang menghubungkan antarmuka UI Zulayka, data graf
 * Umar & Mutiara, serta algoritma pencarian rute terpendek Dijkstra.
 * Dilengkapi fallback Dijkstra internal agar dapat langsung diuji.
 * ============================================================================
 */

(function () {
  'use strict';

  console.log('[MapIntegration] Inisialisasi modul integrasi peta oleh Tengku Fahreza...');

  /**
   * ==========================================================================
   * KONFIGURASI ID ELEMEN DOM ZULAYKA
   * ==========================================================================
   * Jika Zulayka menamai ID secara berbeda di index.html, sesuaikan di sini:
   */
  const CONFIG = {
    SELECT_ASAL_ID: 'select-asal',
    SELECT_TUJUAN_ID: 'select-tujuan',
    BTN_CARI_ID: 'btn-cari',
    PANEL_HASIL_ID: 'panel-hasil',
    HASIL_RUTE_ID: 'hasil-rute',
    HASIL_JARAK_ID: 'hasil-jarak',
    HASIL_WAKTU_ID: 'hasil-waktu',
    DATA_SOURCE_URL: './dummy_data.json', // Nanti ganti ke 'data_fmipa.json' jika Umar/Mutiara sudah siap
    KECEPATAN_JALAN_M_MENIT: 75           // 75 meter per menit jalan santai
  };

  // State lokal memori graf
  const state = {
    nodes: [],
    edges: [],
    nodeMap: {},
    isLoaded: false
  };

  /**
   * Helper pengambil elemen DOM secara aman
   */
  function getEl(id) {
    return document.getElementById(id);
  }

  /**
   * 1. MEMBACA DATA JSON MENGGUNAKAN fetch()
   */
  async function loadMapData() {
    try {
      console.log(`[MapIntegration] Membaca data dari ${CONFIG.DATA_SOURCE_URL}...`);
      const response = await fetch(CONFIG.DATA_SOURCE_URL);

      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }

      const data = await response.json();
      state.nodes = data.nodes || [];
      state.edges = data.edges || [];

      // Buat dictionary simpul
      state.nodeMap = {};
      state.nodes.forEach(node => {
        state.nodeMap[node.id] = node;
      });

      state.isLoaded = true;
      console.log(`[MapIntegration] Sukses memuat ${state.nodes.length} simpul dan ${state.edges.length} sisi.`);

      // Isi dropdown pilihan tempat
      populateDropdowns(state.nodes);
      return data;
    } catch (err) {
      console.error('[MapIntegration] Gagal membaca berkas JSON:', err);
    }
  }

  /**
   * 2. MENGISI PILIHAN TEMPAT KE <select id="select-asal"> & <select id="select-tujuan">
   */
  function populateDropdowns(nodes) {
    const selectAsal = getEl(CONFIG.SELECT_ASAL_ID);
    const selectTujuan = getEl(CONFIG.SELECT_TUJUAN_ID);

    if (!selectAsal || !selectTujuan) {
      console.warn('[MapIntegration] Dropdown Zulayka belum tersedia di index.html.');
      return;
    }

    // Urutkan nama gedung
    const sorted = [...nodes].sort((a, b) => a.name.localeCompare(b.name, 'id'));

    function fill(el, placeholder) {
      el.innerHTML = `<option value="">-- ${placeholder} --</option>`;
      sorted.forEach(node => {
        const opt = document.createElement('option');
        opt.value = node.id;
        opt.textContent = `${node.name} (${node.category})`;
        el.appendChild(opt);
      });
    }

    fill(selectAsal, 'Pilih Lokasi Asal');
    fill(selectTujuan, 'Pilih Lokasi Tujuan');
    console.log('[MapIntegration] Dropdown berhasil diisi otomatis.');
  }

  /**
   * 3. ALGORITMA DIJKSTRA INTERNAL (FALLBACK)
   * Tetap berjalan menghitung rute meskipun berkas dijkstra.js teman belum ada.
   */
  function internalDijkstra(nodes, edges, startId, targetId) {
    if (startId === targetId) {
      return {
        success: true,
        totalDistance: 0,
        path: [startId],
        pathNames: [state.nodeMap[startId]?.name || startId]
      };
    }

    // Buat daftar ketetanggaan (Adjacency List)
    const adj = {};
    nodes.forEach(n => (adj[n.id] = []));
    edges.forEach(e => {
      if (adj[e.source]) adj[e.source].push({ node: e.target, weight: e.weight });
      if (adj[e.target]) adj[e.target].push({ node: e.source, weight: e.weight });
    });

    const dist = {};
    const prev = {};
    const unvisited = new Set(nodes.map(n => n.id));

    nodes.forEach(n => {
      dist[n.id] = Infinity;
      prev[n.id] = null;
    });
    dist[startId] = 0;

    while (unvisited.size > 0) {
      let curr = null;
      let min = Infinity;
      unvisited.forEach(id => {
        if (dist[id] < min) {
          min = dist[id];
          curr = id;
        }
      });

      if (!curr || min === Infinity || curr === targetId) break;
      unvisited.delete(curr);

      (adj[curr] || []).forEach(nb => {
        if (unvisited.has(nb.node)) {
          const alt = dist[curr] + nb.weight;
          if (alt < dist[nb.node]) {
            dist[nb.node] = alt;
            prev[nb.node] = curr;
          }
        }
      });
    }

    if (dist[targetId] === Infinity) {
      return { success: false, totalDistance: 0, path: [], pathNames: [] };
    }

    const path = [];
    let p = targetId;
    while (p) {
      path.unshift(p);
      p = prev[p];
    }

    return {
      success: true,
      totalDistance: dist[targetId],
      path: path,
      pathNames: path.map(id => state.nodeMap[id]?.name || id)
    };
  }

  /**
   * 4. MENANGANI KLIK TOMBOL <button id="btn-cari">
   */
  function handleCariClick() {
    const selectAsal = getEl(CONFIG.SELECT_ASAL_ID);
    const selectTujuan = getEl(CONFIG.SELECT_TUJUAN_ID);

    if (!selectAsal || !selectTujuan) {
      alert('Elemen dropdown tidak ditemukan di halaman.');
      return;
    }

    const asalId = selectAsal.value;
    const tujuanId = selectTujuan.value;

    if (!asalId || !tujuanId) {
      alert('Silakan pilih lokasi asal dan lokasi tujuan terlebih dahulu!');
      return;
    }

    console.log(`[MapIntegration] Mencari rute: ${asalId} ➔ ${tujuanId}`);

    // Utamakan fungsi dari teman Algorithm Engineer jika ada, jika belum ada pakai internalDijkstra
    let result;
    if (typeof window.DijkstraAlgorithm?.findShortestPath === 'function') {
      result = window.DijkstraAlgorithm.findShortestPath(state.nodes, state.edges, asalId, tujuanId);
    } else {
      result = internalDijkstra(state.nodes, state.edges, asalId, tujuanId);
    }

    renderResult(result);
  }

  /**
   * 5. MENAMPILKAN HASIL JARAK & JALUR KE PANEL UI
   */
  function renderResult(result) {
    const panel = getEl(CONFIG.PANEL_HASIL_ID);
    const elRute = getEl(CONFIG.HASIL_RUTE_ID);
    const elJarak = getEl(CONFIG.HASIL_JARAK_ID);
    const elWaktu = getEl(CONFIG.HASIL_WAKTU_ID);

    if (panel) {
      panel.style.display = 'block';
      panel.classList.remove('hidden');
    }

    if (!result || !result.success) {
      if (elRute) elRute.textContent = 'Tidak ditemukan jalur yang menghubungkan.';
      if (elJarak) elJarak.textContent = '-';
      return;
    }

    if (elRute) {
      elRute.textContent = result.pathNames.join(' ➔ ');
    }

    if (elJarak) {
      elJarak.textContent = `${result.totalDistance} Meter`;
    }

    if (elWaktu) {
      const menit = (result.totalDistance / CONFIG.KECEPATAN_JALAN_M_MENIT).toFixed(1);
      elWaktu.textContent = `± ${menit} Menit jalan kaki`;
    }

    console.log(`[MapIntegration] Hasil sukses ditampilkan: ${result.totalDistance}m via ${result.pathNames.join(' -> ')}`);
  }

  /**
   * 6. INISIALISASI SAAT HALAMAN SELESAI DIMUAT
   */
  function init() {
    const btnCari = getEl(CONFIG.BTN_CARI_ID);
    if (btnCari) {
      btnCari.addEventListener('click', handleCariClick);
      console.log('[MapIntegration] Event click tombol cari aktif.');
    }

    // Muat data JSON
    loadMapData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Lampirkan ke window
  window.MapIntegration = {
    author: 'Tengku Fahreza',
    state: state,
    loadMapData: loadMapData,
    handleCariClick: handleCariClick
  };
})();
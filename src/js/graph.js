// src/js/graph.js

export class Graph {
  constructor() {
    this.adjacencyList = {};
    this.nodes = {}; // Menyimpan metadata node (name, floor, x, y)
  }

  // Menambahkan simpul (node/vertex) baru beserta metadatanya
  addNode(node, details = {}) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
    if (details && Object.keys(details).length > 0) {
      this.nodes[node] = details;
    }
  }

  // Menambahkan sisi (edge) berbobot antar simpul
  addEdge(node1, node2, weight) {
    if (!this.adjacencyList[node1]) this.addNode(node1);
    if (!this.adjacencyList[node2]) this.addNode(node2);

    this.adjacencyList[node1].push({ node: node2, weight });
    this.adjacencyList[node2].push({ node: node1, weight });
  }

  // Mengambil daftar tetangga dari suatu simpul
  getNeighbors(node) {
    return this.adjacencyList[node] || [];
  }

  // Mengambil detail metadata dari suatu simpul (koordinat, lantai, nama)
  getNodeDetails(node) {
    return this.nodes[node] || null;
  }

  // Helper untuk menghitung jarak Euclidean otomatis antara dua koordinat
  calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.round(Math.sqrt(dx * dx + dy * dy) * 10) / 10;
  }
}
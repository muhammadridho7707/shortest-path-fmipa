// src/js/graph.js

export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Menambahkan simpul (node/vertex) baru
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  // Menambahkan sisi (edge) berbobot antar simpul
  addEdge(node1, node2, weight) {
    if (!this.adjacencyList[node1]) this.addNode(node1);
    if (!this.adjacencyList[node2]) this.addNode(node2);

    this.adjacencyList[node1].push({ node: node2, weight });
    this.adjacencyList[node2].push({ node: node1, weight }); // Hapus baris ini jika Directed Graph
  }

  // Mengambil daftar tetangga dari suatu simpul
  getNeighbors(node) {
    return this.adjacencyList[node] || [];
  }
}
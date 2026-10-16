// src/js/graph.js
import { graphData } from './data.js';

export class Graph {
  constructor() {
    this.nodes = {};
    this.adjacencyList = {};
  }

  addNode(nodeId, details = {}) {
    this.nodes[nodeId] = details;
    if (!this.adjacencyList[nodeId]) this.adjacencyList[nodeId] = [];
  }

  addEdge(from, to, weight = 1) {
    if (!this.nodes[from]) this.addNode(from, graphData.nodes[from] || {});
    if (!this.nodes[to]) this.addNode(to, graphData.nodes[to] || {});
    if (!this.adjacencyList[from].some(e => e.node === to))
      this.adjacencyList[from].push({ node: to, weight });
    if (!this.adjacencyList[to].some(e => e.node === from))
      this.adjacencyList[to].push({ node: from, weight });
  }

  getNodeDetails(nodeId) {
    return this.nodes[nodeId] || graphData.nodes[nodeId] || null;
  }

  getNeighbors(nodeId) {
    return this.adjacencyList[nodeId] || [];
  }
}
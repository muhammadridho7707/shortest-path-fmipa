// test-graph.mjs
import { Graph } from './src/js/graph.js';
import { graphData } from './src/js/data.js';

const graph = new Graph();

// 1. Load semua node
Object.keys(graphData.nodes).forEach(nodeId => {
  graph.addNode(nodeId, graphData.nodes[nodeId]);
});

// 2. Load semua edge
graphData.edges.forEach(edge => {
  graph.addEdge(edge.from, edge.to, edge.weight);
});

console.log("=== ADJACENCY LIST GRAF FMIPA ===");
console.log(JSON.stringify(graph.adjacencyList, null, 2));

console.log("\n=== METADATA GEDUNG SYAWAL GULTOM ===");
console.log(graph.getNodeDetails("GEDUNG_SYAWAL_GULTOM"));

console.log("\n=== TETANGGA DARI GEDUNG SYAWAL GULTOM ===");
console.log(graph.getNeighbors("GEDUNG_SYAWAL_GULTOM"));
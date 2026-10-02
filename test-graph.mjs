// test-graph.js
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

console.log("\n=== METADATA NODE R_101 ===");
console.log(graph.getNodeDetails("R_101"));

console.log("\n=== TETANGGA DARI KOR_A1 ===");
console.log(graph.getNeighbors("KOR_A1"));
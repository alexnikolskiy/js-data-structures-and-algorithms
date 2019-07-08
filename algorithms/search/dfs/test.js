const assert = require('assert').strict;
const Graph = require('../../../data-structures/graph');
const search = require('./index');

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

const node = search(graph, "A", node => node === "E");

assert.equal("E", node);

console.info('OK!');

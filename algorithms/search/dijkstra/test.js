const assert = require('assert').strict;
const Graph = require('../../../data-structures/graph');
const search = require('./index');
const graph = new Graph();


graph.addNode("S");
graph.addNode("A");
graph.addNode("B");
graph.addNode("F");
graph.addDirectedEdge("S", "A", 6);
graph.addDirectedEdge("S", "B", 2);
graph.addDirectedEdge("B", "A", 3);
graph.addDirectedEdge("B", "F", 5);
graph.addDirectedEdge("A", "F", 1);

// graph.addNode("A");
// graph.addNode("S");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("D");
// graph.addNode("F");
// graph.addDirectedEdge("S", "A", 5);
// graph.addDirectedEdge("S", "B", 2);
// graph.addDirectedEdge("A", "C", 4);
// graph.addDirectedEdge("A", "D", 2);
// graph.addDirectedEdge("B", "A", 8);
// graph.addDirectedEdge("B", "D", 7);
// graph.addDirectedEdge("C", "D", 6);
// graph.addDirectedEdge("C", "F", 3);
// graph.addDirectedEdge("D", "F", 1);

const { distances, path } = search(graph, 'S');

console.log(distances);
console.log(path.join(' -> '));

assert.equal(6, distances.get("F"));

console.info('OK!');

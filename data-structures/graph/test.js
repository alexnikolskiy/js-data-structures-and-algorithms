const assert = require('assert').strict;
const Graph = require('./index');

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);

graph.addDirectedEdge(1, 2);
graph.addDirectedEdge(1, 3);

assert.deepEqual([2,3], graph.getNeighbors(1));

console.info('OK!');



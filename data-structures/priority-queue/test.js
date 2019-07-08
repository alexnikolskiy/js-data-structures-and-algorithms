const assert = require('assert').strict;
const PriorityQueue = require('./index');

const queue = new PriorityQueue();
queue.enqueue('S', 0);
queue.enqueue('A', 6);
queue.enqueue('B', 2);

assert.equal('S', queue.dequeue().element);

console.info('OK!');

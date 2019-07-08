const assert = require('assert').strict;
const Heap = require('./index');

const heap = new Heap();
heap.insert('a', 29);
heap.insert('b', 18);
heap.insert('c', 42);

assert.deepEqual(['c', 'b', 'a'], heap.getHeap());
assert.equal(0, heap.parent(1));
assert.equal(0, heap.parent(2));
assert.equal(1, heap.leftChild(0));
assert.equal(2, heap.rightChild(0));
assert.equal('c', heap.getMax().element);
assert.equal('c', heap.extractMax().element);
assert.deepEqual(['a', 'b'], heap.getHeap());
heap.insert('c',42);
heap.remove('a');
assert.deepEqual(['c', 'b'], heap.getHeap());
heap.changePriority('b', 43);
assert.deepEqual(['b', 'c'], heap.getHeap());

console.log('OK!');

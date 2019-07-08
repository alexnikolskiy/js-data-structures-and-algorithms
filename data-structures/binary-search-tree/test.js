const assert = require('assert').strict;
const BST = require('./index');

const tree = new BST();
tree.insert(7);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(13);
tree.insert(10);
tree.insert(15);

assert.deepEqual([6, 7, 10], tree.rangeSearch(5, 12));
tree.delete(6);
assert.deepEqual([7, 10], tree.rangeSearch(5, 12));
tree.delete(4);
assert.deepEqual([1], tree.rangeSearch(0, 5));

console.info('OK!');

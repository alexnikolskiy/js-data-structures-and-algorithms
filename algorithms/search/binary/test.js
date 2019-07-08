const assert = require('assert').strict;
const binarySearch = require('./index');

const arr = [2, 4, 8, 8, 8];

assert.equal(0, binarySearch(arr, 2));
assert.equal(1, binarySearch(arr, 4));
assert.equal(2, binarySearch(arr, 8));
assert.equal(-1, binarySearch(arr, 7));

console.info('OK!');

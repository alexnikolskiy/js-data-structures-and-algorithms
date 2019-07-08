const assert = require('assert').strict;
const insertionSort = require('./index');

const arr = [5, 3, 1, 2, 6];

assert.deepEqual([1, 2, 3, 5, 6], insertionSort(arr));
console.info('OK!');

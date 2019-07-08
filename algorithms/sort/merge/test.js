const assert = require('assert').strict;
const mergeSort = require('./index');

const arr = [5, 3, 1, 2, 6];

assert.deepEqual([1, 2, 3, 5, 6], mergeSort(arr));
console.info('OK!');

const assert = require('assert').strict;
const selectionSort = require('./index');

const arr = [5, 3, 1, 2, 6];

assert.deepEqual([1, 2, 3, 5, 6], selectionSort(arr));
console.info('OK!');

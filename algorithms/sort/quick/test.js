const assert = require('assert').strict;
const quickSort = require('./index');

const arr = [5, 3, 1, 2, 6];
assert.deepEqual([1, 2, 3, 5, 6], quickSort(arr));
console.info('OK!');

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

const assert = require('assert').strict;
const DisjointSet = require('./index');

const dSet = new DisjointSet();

for (let i = 1; i <= 12; i++) {
    dSet.makeSet(i);
}

dSet.union(2, 10);
dSet.union(7, 5);
dSet.union(6, 1);
dSet.union(3, 4);
dSet.union(5, 11);
dSet.union(7, 8);
dSet.union(7, 3);
dSet.union(12, 2);
dSet.union(9, 6);
assert.equal(4, dSet.find(5));
assert.equal(2, [...dSet.rank.values()].filter(Boolean).reduce((acc, cur) => acc * cur));

console.info('OK!');

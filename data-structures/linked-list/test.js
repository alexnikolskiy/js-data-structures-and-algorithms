const assert = require('assert').strict;
const LinkedList = require('./index');

function createList() {
    const list = new LinkedList();

    list.push(5);
    list.push(2);
    list.push(3);

    return list;
}

let list;
let node;

// test push
list = createList();
node = list.push(4);
assert.equal(4, node.value);

// test pop
list = createList();
node = list.pop();
assert.equal(3, node.value);

// test get
list = createList();
node = list.get(0);
assert.equal(5, node.value);

// test delete
list = createList();
node = list.delete(1);
assert.equal(2, node.value);

console.info('OK!');

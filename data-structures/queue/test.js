const assert = require('assert').strict;
const Queue = require('./index');

function createQueue() {
    const queue = new Queue();

    queue.enqueue(5, 2, 3);
    // queue.enqueue(5);
    // queue.enqueue(2);
    // queue.enqueue(3);

    return queue;
}

let queue;
let item;

// test enqueue
queue = createQueue();
assert.equal(queue.enqueue(4), queue.length);

// test dequeue
queue = createQueue();
item = queue.dequeue();
assert.equal(5, item);

// test peek
queue = createQueue();
item = queue.peek();
assert.equal(5, item);

// test isEmpty
queue = createQueue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
assert.equal(true, queue.isEmpty());

console.info('OK!');

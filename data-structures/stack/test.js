const assert = require('assert').strict;
const Stack = require('./index');

function createStack() {
    const stack = new Stack();

    stack.push(5, 2, 3);
    // stack.push(5);
    // stack.push(2);
    // stack.push(3);

    return stack;
}

let stack;
let item;

// test push
stack = createStack();
assert.equal(stack.push(4), stack.length);

// test pop
stack = createStack();
item = stack.pop();
assert.equal(3, item);

// test peek
stack = createStack();
item = stack.peek();
assert.equal(3, item);

// test isEmpty
stack = createStack();
stack.pop();
stack.pop();
stack.pop();
assert.equal(true, stack.isEmpty());

console.info('OK!');

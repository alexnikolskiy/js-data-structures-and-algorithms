class Stack {
    constructor() {
        this.items = [];
    }

    get length() {
        return this.items.length;
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Stack;

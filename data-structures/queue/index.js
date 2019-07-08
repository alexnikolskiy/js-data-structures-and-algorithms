const LinkedList = require('../linked-list');

class Queue {
    constructor() {
        this.items = new LinkedList();
    }

    get length() {
        return this.items.length;
    }

    enqueue(item) {
        return this.items.pushBack(item);
    }

    dequeue() {
        const item = this.items.popFront();

        return !!item ? item.value : item;
    }

    peek() {
        const item = this.items.get(0);

        return !!item ? item.value : item;
    }

    isEmpty() {
        return this.items.isEmpty();
    }
}

module.exports = Queue;

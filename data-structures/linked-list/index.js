class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushFront(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length += 1;
        return node;
    }

    pushBack(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length += 1;
        return node;
    }

    popFront() {
        if (this.isEmpty()) {
            return null;
        }

        const nodeToRemove = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
            this.length -= 1;
        } else {
            this.head = this.head.next;
            nodeToRemove.next = null;
        }

        return nodeToRemove;
    }

    popBack() {
        if (this.isEmpty()) {
            return null;
        }

        const nodeToRemove = this.tail;

        if (this.length === 1) {
            this.tail = this.head = null;
            this.length--;

            return nodeToRemove;
        }

        let current = this.head;

        while (current.next !== this.tail) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
        this.length--;

        return nodeToRemove;
    }

    get(idx) {
        if (this.isEmpty() || idx < 0 || idx >= this.length) {
            return null;
        }

        let current = this.head;
        let i = 0;

        while (i < idx) {
            current = current.next;
            i++;
        }

        return current;
    }

    delete(idx) {
        if (this.isEmpty() || idx < 0 || idx >= this.length) {
            return null;
        }

        let nodeToRemove = this.head;

        if (idx === 0) {
            this.head = this.head.next;
            nodeToRemove.next = null;
            this.length--;

            return nodeToRemove;
        }

        let current = this.head;
        let previous;
        let i = 0;

        while (i < idx) {
            previous = current;
            current = current.next;
            i++;
        }

        nodeToRemove = current;
        previous.next = current.next;
        nodeToRemove.next = null;

        if (previous.next === null) {
            this.tail = previous;
        }

        this.length--;

        return nodeToRemove;
    }

    isEmpty() {
        return this.length === 0;
    }

    [Symbol.iterator]() {
        let current = this.head;

        return {
            next() {
                if (current === null) {
                    return { done: true };
                }

                const value = current.value;

                current = current.next;

                return { value, done: false };
            }
        };
    }

    print() {
        const nodes = [];
        let current = this.head;

        while (current) {
            nodes.push(current.value);
            current = current.next;
        }

        return nodes.join(' -> ');
    }
}

module.exports = LinkedList;

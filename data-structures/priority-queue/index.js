class Element {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    get length() {
        return this.items.length;
    }

    enqueue(item, priority) {
        const element = new Element(item, priority);

        for (let [idx, item] of this.items.entries()) {
            if (element.priority > item.priority) {
                this.items.splice(idx, 0, element);
                return element;
            }
        }

        return this.items.push(element);
    }

    dequeue() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.length - 1];
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = PriorityQueue;

class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    getFront() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    enqueue(element) {
        this.items.push(element);
    }
}
class Stacks {
    constructor() {
        this.items = [];
        this.top = null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    getTop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.top;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        if (this.items.length === 1) {
            this.top = null;
            return this.items.pop();
        } else {
            this.top = this.items[this.items.length - 2];
            return this.items.pop();
        }
    }
}
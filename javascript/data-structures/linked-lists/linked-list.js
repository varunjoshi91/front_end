class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    insertAtHead(data) {
        let tempNode = new Node(data);
        tempNode.nextElement = this.head.nextElement;
        this.head.nextElement = tempNode;
        this.length++;
        return this;
    }

    insertAtTail(data) {
        let currNode = this.head.nextElement;
        let tempNode = new Node(data);
        while(currNode.nextElement != null) {
            currNode = currNode.nextElement;
        }
        currNode.nextElement = tempNode;
        this.length++;
        return this;
    }

    search(data) {
        let currNode = this.head.nextElement;
        if (!currNode) {
            return false;
        }
        while(currNode != null) {
            if (currNode.data === data) {
                return true;
            }
            currNode = currNode.nextElement;
        }

        return false;
    }

    deleteAtHead() {
        let firstNode = this.head.nextElement;
        if (firstNode) {
            this.head.nextElement = firstNode.nextElement;
            this.length--;
            firstNode.nextElement = null;
        }
        return this;
    }

    deleteByValue(value) {
        if (this.isEmpty()) {
            return false;
        }
        let currNode = this.head.nextElement;
        if (currNode.data === value) {
            this.deleteAtHead();
            return true;
        }
        let previousNode = null;
        while (currNode != null) {
            if (currNode.data === value) {
                previousNode.nextElement = currNode.nextElement;
                this.length--;
                return true;
            }
            previousNode = currNode;
            currNode = currNode.nextElement;
        }
        return false;
    }

}
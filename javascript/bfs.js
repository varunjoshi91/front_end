// https://www.algoexpert.io/questions/Breadth-first%20Search

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        let queue = [this];
        while(queue.length) {
            let currNode = queue.shift();
            array.push(currNode.name);
            for (let child of currNode.children) {
                queue.push(child);
            }
        }
        return array;
    }
}
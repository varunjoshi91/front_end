class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [];
        for(let i=0; i < vertices; i++) {
            let temp = new LinkedList();
            this.list.push(temp);
        }
    }

    addEdge(source, destination) {
        this.list[source].insertAtHead(destination);
    }

    printGraph() {
        for(let i=0; i < this.list.length; i++) {
            let currNode = this.list[i].head.nextElement;
            while(currNode != null) {
                console.log(currNode.data);
                currNode = currNode.nextElement;
            }
        }
    }
}

function bfsTraversal(g, source) {
    let result = '';
    let num_of_vertices = g.vertices;
    
    let visited = [];
    for (i = 0; i < num_of_vertices; i++) {
        visited.push(false);
    }

    let queue = new Queue(num_of_vertices);
    queue.enqueue(source);
    visited[source] = true;

    while(!queue.isEmpty()) {
        let currNode = queue.dequeue();
        result += String(currNode);
        let temp = g.list[currNode].getHead().nextElement;
        while(temp != null) {
            if(!visited[temp.data]) {
                queue.enqueue(temp.data);
                visited[temp.data] = true;
            }
            temp = temp.nextElement;
        }
    }
    return result;
}

function dfsTraversal(g, source) {
    let result = '';
    let num_of_vertices = g.vertices;
    
    let visited = [];
    for (i = 0; i < num_of_vertices; i++) {
        visited.push(false);
    }

    let stack = new Stack(num_of_vertices);
    stack.push(source);
    visited[source] = true;

    while(!stack.isEmpty()) {
        let currNode = stack.pop();
        result += String(currNode);
        let temp = g.list[currNode].getHead().nextElement;
        while(temp != null) {
            if(!visited[temp.data]) {
                stack.push(temp.data);
                visited[temp.data] = true;
            }
            temp = temp.nextElement;
        }
    }
    return result;
}
function reverse(list) {
    if (list.isEmpty() || list.length === 1) {
        return list;
    }
    let currNode = list.head.nextElement;
    let previousNode = null;

    while(currNode.nextElement != null) {
        let nextNode = currNode.nextElement;
        currNode.nextElement = previousNode;
        previousNode = currNode;
        currNode = nextNode;
    }

    list.head.nextElement = previousNode;

    return list;
}

function detectLoopUsingArray(list) {
    let visited = [];
    let currNode = list.head.nextElement;

    while(currNode != null) {
        if (visited.includes(currNode)) {
            return true;
        }
        visited.push(currNode);
        currNode = currNode.nextElement;
    }
    return false;
}

function detectLoopUsingPointers(list) {
    let slow = list.head, fast = list.head;
    while(slow != null && fast != null && fast.nextElement != null) {
        slow = slow.nextElement;
        fast = fast.nextElement.nextElement;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

function findMid(list) {
    if (list.isEmpty()) {
        return -1;
    }
    
    let currNode = list.head.nextElement;
    if (list.length === 1) {
        return currNode.data;
    }

    let midNode = currNode;
    currNode = currNode.nextElement.nextElement;

    while(currNode != null) {
        midNode = midNode.nextElement;
        currNode = currNode.nextElement;
        if (currNode) {
            currNode = currNode.nextElement;
        }
    }

    return midNode.data;
}

function removeDuplicates(list) {
    let visited = [];
    let currNode = list.head.nextElement;
    let prevNode = null;

    while (currNode.nextElement != null) {
        if (visited.includes(currNode)) {
            prevNode.nextElement = currNode.nextElement;
        }
        visited.push(currNode);
        prevNode = currNode;
        currNode = currNode.nextElement;
    }
}

function findNth(list, n){
    let nthNode=list.getHead(); //This iterator will reach the nth node
    let endNode=list.getHead(); //This iterator will reach the end
    
    let count=0;
    if(!list.isEmpty()){
      while(count<n){
        if(endNode==null){
          console.log("Out of bounds");
          return -1;
        }
        endNode=endNode.nextElement;
        count++;
      }
    }
    while(endNode!=null){
      endNode=endNode.nextElement;
      nthNode=nthNode.nextElement;
    }
    if (nthNode!=null){
      return nthNode.data;
    }
    else{
     return -1; 
    }
  }  
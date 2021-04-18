// https://bigfrontend.dev/problem/Implement-a-Stack-by-using-Queue

/* you can use this Queue which is bundled together with your code
class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() { 
    // return the head element
  }
  dequeue() { 
    // remove head element from the queue
  }
  size() { 
    // return the queue size
  }
}
*/


// you need to complete the following Stack, using only Queue
class Stack {

    constructor() {
      this.queue = new Queue();
    }
  
    push(element) {
      // push an element into the stack
      let rotation = this.size();
      this.queue.enqueue(element);
      while(rotation > 0) {
        this.queue.enqueue(this.queue.dequeue());
        rotation--;
      }
    }
    peek() { 
      // get the top element 
      return this.queue.peek();
    }
    pop() { 
      // remove top element from stack
      return this.queue.dequeue();
    }
    size() { 
      // return count of elements
      return this.queue.size();
    }
  }
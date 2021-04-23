// https://bigfrontend.dev/problem/create-a-counter-object


/**
 * @returns { {count: number}}
 */
 function createCounter() {
    // your code here
    let counter = -1;
  
    return {
      get count() {
        counter++;
        return counter;
      }
    }
  }
  
  
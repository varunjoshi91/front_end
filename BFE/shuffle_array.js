
/**
  * @param {any[]} arr
  */
 function shuffle(arr) {
    // modify the arr inline to change the order randomly
    for(let i = 0; i < arr.length; i++) {
      const j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
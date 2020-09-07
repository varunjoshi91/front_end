// https://bigfrontend.dev/problem/implement-Array-prototype.flat


// Recursive
/**
 * @param {Array} arr
 * @param {number} depth
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  const result = [];
  
  for(const elem of arr) {
    if (Array.isArray(elem) && depth > 0) {
      result.push(...flat(elem, depth - 1));
    } else {
      result.push(elem);
    }
  }
  
  return result;
}


// Iterative, Better


/**
 * @param {Array} arr
 * @param {number} depth
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  const result = [];
  const stack = arr.map(i => [i, depth]);
  
  while (stack.length) {
    const [top, localDepth] = stack.pop();
    if (Array.isArray(top) && localDepth > 0) {
      stack.push(...top.map(i => [i, localDepth - 1]));
    } else {
      result.push(top);
    }
  }
  
  
  return result.reverse();
}


// Worse


/**
 * @param {Array} arr
 * @param {number} depth
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  const result = [];
  for(const elem of arr) {
    if (Array.isArray(elem)) {
      const queue = [elem];
      let localDepth = depth;
      
      while(queue.length && localDepth > 0) {
        const num = queue.shift();
        if (Array.isArray(num)) {
          queue.push(...num);
          localDepth--;
        } else {
          result.push(num);
        }
      }
      
      if (queue.length) {
        result.push(...queue);
      }
      
    } else {
      result.push(elem);
    }
  }
  
  return result;
}
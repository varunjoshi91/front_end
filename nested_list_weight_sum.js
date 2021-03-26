// https://leetcode.com/problems/nested-list-weight-sum/

// Recursive

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSum = function(nestedList) {
    return depthSumRec(nestedList, 1);
};

var depthSumRec = function(nestedList, depth) {
    let sum = 0;

    for (let num of nestedList) {
        if (num.isInteger()) {
            sum += num.getInteger() * depth;
        } else {
            sum += depthSumRec(num.getList(), depth + 1);
        }
    }
    
    return sum;
};

// Iterative

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSum = function (nestedList) {
   let depth = 1;
   let queue = nestedList;
   let sum = 0;

   while (queue.length) {
     const size = queue.length;
     for (let i = 0; i < size; i++) {
       const num = queue.shift();
       if (num.isInteger()) {
         sum += num.getInteger() * depth;
       } else {
         queue.push(...num.getList());
       }
     }
     depth++;
   }

   return sum;
 };
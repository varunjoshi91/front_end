let maxDepth = function(root) {
    if(!root || root.length < 1) {
        return 0;
    }
    let max = 0, index = 0;
    let queue = [root[index++]];

    while(queue.length) {
        let size = index + queue.length * 2; // * increasing factor
        queue = [];
        for(; index < root.length && index < size; index++) {
            queue.push(root[index]);
        }
        max++;
    }

    return max;
};
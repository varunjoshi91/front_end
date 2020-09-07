let maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    let max = 0;
    let queue = [root];

    while(queue.length) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift(); // this makes the queue empty
            queue.push(...node.children); // this fills it again with children and hence level increase is justified after the loop
        }
        max++;
    }

    return max;
};
// https://bigfrontend.dev/problem/Next-Right-Sibiling

const node1 = document.getElementById("button");
const node2 = document.getElementById("anchor");

// BFS
function nextRightSibling(root, target) {
    if (!root) {
        return null;
    }
    const queue = [root];

    while(queue.length) {
        let size = queue.length;
        while(size) {
            const node = queue.shift();
            if (node === target) {
                if (!queue.length) {
                    return null;
                }
                return queue.shift();
            }
            queue.push(...node.children);
            size--;
        }
    }

    return null;
}

// bottoms up
function nextRightSibling(root, target) {
    /* 
        Start from the bottoms up
        check if target has a sibling -> YES then return that sibling
        if not -> go to parent, and check explore their siblings, with depth info
    */

    if (!root) {
        return null;
    }
    if (target.nextElementSibling) {
        return target.nextElementSibling;
    }

    const explore = (node, depth) => {
        if (!node) {
            return;
        }
        if (depth === 0) {
            return node;
        }

        for(let child of node.children) {
            const node = explore(child, depth - 1);
            if (node) {
                return node;
            }
        }
    }

    let depth = 1;
    let parent = target.parentElement

    while(parent) {
        let nextSibling = parent.nextElementSibling;
        while(nextSibling) {
            const node = explore(nextSibling, depth);
            if (node) {
                return node;
            }
            nextSibling = nextSibling.nextElementSibling;
        }
        parent = parent.parentElement;
        depth++;
    }

    return null;
}
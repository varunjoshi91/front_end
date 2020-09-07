// https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
      return this;
    }
  }
  
  const test = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
  .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)
  .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500);

  console.log('testing', findClosestValueInBst(test, 208));


  // Iterative
  function findClosestValueInBst(tree, target) {
    if (!tree) {
        return;
    }

    let closest = tree.value;
    let currNode = tree;

    while(currNode) {
        if (Math.abs(target - currNode.value) < Math.abs(target - closest)) {
            closest = currNode.value;
        }
        if (target < currNode.value) {
            currNode = currNode.left;
        } else if (target > currNode.value) {
            currNode = currNode.right;
        } else {
            return closest;
        }
    }
    return closest;
}

// Recursive

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Number.MAX_SAFE_INTEGER);
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (!tree) {
        return closest;
    }
    if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

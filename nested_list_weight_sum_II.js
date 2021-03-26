// https://leetcode.com/problems/nested-list-weight-sum-ii/submissions/

var depthSumInverse = function(nestedList) {
    let weightedSum = 0, unWeightedSum = 0, list = nestedList;
    
    while(list.length > 0) {
        let newList = [];
        for(let i = 0; i < list.length; i++) {
            if (list[i].isInteger()) {
                unWeightedSum += list[i].getInteger();
            } else {
                newList.push(...list[i].getList());
            }
        }
        weightedSum += unWeightedSum;
        list = newList;
    }
    
    return weightedSum;
};
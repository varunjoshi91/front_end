// https://leetcode.com/problems/shortest-word-distance-ii/

/**
 * @param {string[]} wordsDict
 */
 var WordDistance = function(wordsDict) {
    this.words = wordsDict;
    this.store = this.words.reduce((obj, i, idx) => {
        if (obj[i]) {
         obj[i].push(idx);   
        } else {
            obj[i] = [idx];
        }
        return obj;
    }, {}); 
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const idxW1 = this.store[word1];
    const idxW2 = this.store[word2];
    let shortestDistance = this.words.length;
    
    let i = 0; j = 0;
    
    while(i < idxW1.length && j < idxW2.length) {
        const pos1 = idxW1[i];
        const pos2 = idxW2[j];
        
        if (pos1 < pos2) {
            shortestDistance = Math.min(shortestDistance, pos2 - pos1);
            i++;
        } else {
            shortestDistance = Math.min(shortestDistance, pos1 - pos2);
            j++;
        }
        
        if (shortestDistance === 1) {
            return 1;
        }
    }

    return shortestDistance;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
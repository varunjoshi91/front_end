const anagram = function (s, t) {
    if(!s || !t) {
        return false;
    }
    let utilSet = {};
    for(let char of s) {
        if(utilSet[char]) {
            utilSet[char] = ++utilSet[char];
        } else {
            utilSet[char] = 1;
        }
    }

    for(let char of t) {
        utilSet[char] ? utilSet[char]-- : utilSet[char] = 1;
    }
    
    for(let i in utilSet) {
        if(utilSet[i] > 0) {
            return false;
        }
    }
    return true;
}
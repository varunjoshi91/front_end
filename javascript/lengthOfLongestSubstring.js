let lengthOfLongestSubstring = function(s) {
    let max = 0;
    
    if (!s || s.length === 0) {
        return max;
    } else {
        max = 1;
    }
    
    let n = s.length, i = 0, j = 0, utilitySet = new Set();

    while(i < n && j < n) {
        if (!utilitySet.has(s.charAt(j))) {
            utilitySet.add(s.charAt(j));
            j++;
            max = Math.max(max, j - i);
        } else {
            utilitySet.delete(s.charAt(i));
            i++;
        }
    }
    return max;
};

writeToPage(lengthOfLongestSubstring('abcabcbb'));
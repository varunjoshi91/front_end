// https://bigfrontend.dev/problem/highlight-keywords-in-HTML-string

/**
 * @param {string} html
 * @param {string[]} keywords
 */
 function highlightKeywords(html, keywords) {
    // your code here
    if (!html || !html.length) {
      return '';
    }
  
    if (!keywords || !keywords.length) {
      return html;
    }
  
    // return idx else return -1
    const getEndIndexForEm = (start) => {
      let wordFound = false;
      let endIdx = start;
  
      while (start <= endIdx) {
        for(let word of keywords) {
          if (html.slice(start, start + word.length) === word) {
            wordFound = true;
            endIdx = Math.max(endIdx, start + word.length - 1);
          }
        }
        start++;
      }
  
      return wordFound ? endIdx : -1;
    }
  
    let result = '';
  
    for(let i = 0; i < html.length; i++) {
      let finalIdxForEm = getEndIndexForEm(i);
  
      // we've found the final index of the highlighted word
  
      while (finalIdxForEm > -1) {
        const nextIdxForEm = getEndIndexForEm(finalIdxForEm + 1);
        if (nextIdxForEm === -1) {
          break;
        }
        finalIdxForEm = nextIdxForEm;
      }
  
      if (finalIdxForEm > -1) {
        result += `<em>${html.slice(i, finalIdxForEm + 1)}</em>`
        i = finalIdxForEm;
      } else {
        result += html[i];
        continue;
      }
    }
  
    return result;
  };
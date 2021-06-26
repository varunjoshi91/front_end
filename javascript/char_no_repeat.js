Arrange characters in string such that no characters repeat consecutively.

aaabbcdddd -> adbdcdabad

// total length: 10
// different types of characters : 4
// and frequencies


dadadadbcb

const noRepeat = (str) => {

  const result = [];
  const frequency = {};
  
  for(const char of str) {
    if (frequency[char]) {
      frequency[char] = frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  
  // [ [a,3], [b, 2] ]
  const frequencyArray = Object.enteries(frequency).sort((a,b) => {
    return b[1] - a[1];
  });
  
  let index = 0;
  
  while(frequencyArray.length) {
  
    const [char, frequency] = frequencyArray.pop(); // [b,2], char = b, frequency = 2
    
    let tempIdx = 0;
    while(result[tempIdx]){
      tempIdx++;
    }
    
    while(frequency) {
      result[tempIdx] = char; // [d,a,d,a,d,a,d,b,c,b]
      tempIdx += 2;
      frequency--;
    }
  }

  return result.join('');
}
      
d d d d


d d d d

// First approach
{
  a: 3,
  b: 2
  c: 1
  d: 4
}

// Second approach

ababacdddd
    xy

aaabbb
aaabb
aaab

aaab
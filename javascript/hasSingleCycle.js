// https://www.algoexpert.io/questions/Single%20Cycle%20Check

function hasSingleCycle(array) {
    let currentIdx = 0;
    let numVisited = 0;
  
    while (numVisited < array.length) {
      if (numVisited > 0 && currentIdx === 0) {
        return false;
      }
      numVisited++;
      currentIdx = getNewIdx(currentIdx, array);
    }
  
    return currentIdx === 0;
  }
  
  function getNewIdx(currentIdx, array) {
    let jump = array[currentIdx];
    let newIdx = (jump + currentIdx) % array.length;
    return newIdx >= 0 ? newIdx : newIdx + array.length;
  }
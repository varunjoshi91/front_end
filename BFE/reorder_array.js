// https://bigfrontend.dev/problem/reorder-array-with-new-indexes

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
 function sort(items, newOrder) {
    // reorder items inline
    if (!items || !newOrder || items.length !== newOrder.length) {
      return [];
    }
  
    for(let i = 0; i < items.length; i++) {
      if (newOrder[i] === i) {
        continue;
      }
      let idxWhereItShouldBe = newOrder[i];
/*       let tempItem = items[idxWhereItShouldBe];
      let tempIdx = newOrder[idxWhereItShouldBe];
  
      items[idxWhereItShouldBe] = items[i];
      newOrder[idxWhereItShouldBe] = newOrder[i];
  
      items[i] = tempItem;
      newOrder[i] = tempIdx; */

      [items[i], items[idxWhereItShouldBe]] = [items[idxWhereItShouldBe], items[i]];
      [newOrder[i], newOrder[idxWhereItShouldBe]] = [newOrder[idxWhereItShouldBe], newOrder[i]];
    }
  
    return items;
  }
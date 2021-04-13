/* 
Given input:

// could be potentially more than 3 keys in the object above
// 10000
items = [
{color: 'red', type: 'tv', age: 18},
{color: 'silver', type: 'phone', age: 20}
...
]

// 1000
excludes = [
{k: 'color', v: 'silver'},
{k: 'color', v: 'red'},
{k: 'type', v: 'tv'},
....
]
function excludeItems(items, excludes) {
    excludes.forEach(pair => {
        items = items.filter(item => item[pair.k] === item[pair.v]);
    });
    return items;
}

1. Describe what this function is doing...
2. What is wrong with that function ?
3. How would you optimize it ?

*/

// https://www.glassdoor.com/Interview/Given-input-could-be-potentially-more-than-3-keys-in-the-object-above-items-color-red-type-tv-age-18-QTN_2372314.htm

let items = [
    { color: "red", type: "tv", age: 18 },
    { color: "silver", type: "phone", age: 20 },
  ];
  
  let excludes = [
    { k: "color", v: "silver" },
    { k: "type", v: "phone" },
  ];
  
  const createPropMap = (excludes) => {
      const map = {};
  
      for(let i of excludes) {
          if (map[i.k + i.v]) {
              continue;
          } else {
              map[i.k + i.v] = true;
          }
      }
  
      return map;
  }
  
  function excludeItems(items, excludes) {
      const excludesMap = createPropMap(excludes);
  
      // colorsilver
  
      return items.filter(item => {
          // color, type, age
          const propertiesOfItems = Object.keys(item);
  
          return !propertiesOfItems.some(prop => {
              // color, type, age
              // excludesMap[colorred]
              return excludesMap[prop + item[prop]];
          });
      });
  }
  
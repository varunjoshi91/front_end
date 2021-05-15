console.clear();

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

const items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "black", type: "laptop", age: 25 },
];

const excludes = [
  { k: "color", v: "silver" },
  { k: "color", v: "red" },
  { k: "type", v: "tv" },
];
function excludeItems(items, excludes) {
    const excludesSet = new Set();
    
    for(const item of excludes) {
        const combined = `${item.k}_${item.v}`;
        if (excludesSet.has(combined)) {
            continue;
        } else {
            excludesSet.add(combined);
        }
    }

    return items.filter(item => {
        const keys = Object.keys(item);
        for(const prop of keys) {
            const combined = `${prop}_${item[prop]}`;
            if (excludesSet.has(combined)) {
                return false;
            }
        }
        return true;
    });

}

// console.log(excludeItems(items, excludes));

let a = [1,[2,3, [4,5]]];

const arr_flatten_rec = (arr, depth = 1) => {
    const result = [];

    arr.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...arr_flatten_rec(item, depth - 1));
        } else {
            result.push(item);
        }
    });

    return result;
}

const arr_flatten_iterative = (arr, depth = 1) => {
    const stack = arr.map(i => [i, depth]);
    const result = [];

    while(stack.length) {
        const [item, localDepth] = stack.pop();

        if (Array.isArray(item) && localDepth > 0) {
            item.forEach(i => stack.push([i, localDepth - 1]));
        } else {
            result.push(item);
        }
    }

    return result.reverse();
}

/* console.log(a);
console.log(a.flat(2));
console.log(arr_flatten_rec(a, 2));
console.log(arr_flatten_iterative(a, 2)); */


const root1 = document.getElementById('rootA');
const root2 = document.getElementById('rootB');
const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

const getSymmetricNode = (root1, root2, node) => {

    const getIdx = (node) => {
        if (!node) {
            return -1;
        }
        const parent = node.parentNode;
        return Array.from(parent.childNodes).indexOf(node);
    }

    const getPath = (root, node) => {
        // node towards root
        const path = [];
        while(node !== root) {
            path.push(getIdx(node));
            node = node.parentNode;
        }
        return path;
    }

    const pathFromNodeAtoRootA = getPath(root1, node);

    const walkPath = (node, path) => {
        while(path.length) {
            node = node.childNodes[path.pop()];
        }
        return node;
    }

    return walkPath(root2, pathFromNodeAtoRootA);
}

// console.log(nodeB === getSymmetricNode(root1, root2, nodeA));


// Write an emitter class: /* emitter = new Emitter();
// 1. Support subscribing to events. sub = emitter.subscribe('event_name', callback);
// sub2 = emitter.subscribe('event_name', callback2);
// 2. Support emitting events. // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar);
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release();
// `sub` is the reference returned by `subscribe` above

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);

        const release = () => {
            delete this.events[event];
            return true;
        }

        return { release };
    }

    emit(event, ...args) {
        if (!this.events[event]) {
            throw new Error('event not subscribed to');
        }
        const callbacks = this.events[event];
        callbacks.forEach(callback => callback(...args));
    }
}

const emitter = new EventEmitter();

/* try {
  const sub1 = emitter.subscribe("click", console.log);
  emitter.emit("click", "hey1", "varun", "surbhi");
  emitter.emit("click", "hey2");
  emitter.emit("click", "hey3");
  emitter.emit("click", "hey4");
  sub1.release();
  emitter.emit("click", "hey5");
  emitter.emit("click", "hey7");
  emitter.emit("click", "hey9");
  emitter.emit("click", "hey11");
} catch (e) {
  console.error(e);
} */


/* Implement a simple store class with set(Node, value), get(Node) and has(Node) methods, 
which store a given Nodes with corresponding values. */

class StoredNode {
    constructor(node, value) {
        this._node = node;
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get node() {
        return this._node;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NodeStorage {
    constructor() {
        this._nodes = []; // Array for StoredNode
    }

    has(node) {
        return !!this.get(node);
    }

    get(node) {
        const foundNode = this._nodes.find(storedNode => storedNode.node === node);
        if (foundNode) {
            return foundNode.value;
        }
        return;
    }

    set(node, value) {
        const idx = this._nodes.indexOf(node);
        if (idx > -1) {
            this._nodes[idx].setValue(value);
        } else {
            const storedNode = new StoredNode(node, value);
            this._nodes.push(storedNode);
        }
    }
}

/* class NodeStorageSimpleArray {
    constructor() {
        this._nodes = [];
        this._values = [];
    }

    has(node) {
        return !!this.get(node);
    }

    get(node) {
        // return this._nodes.find(storedNode => storedNode === node);
        return this._values[this._nodes.indexOf(node)];
    }

    set(node, value) {
        const idx = this._nodes.indexOf(node);
        if (idx > -1) {
            this._values[idx] = value;
        } else {
            this._nodes.push(node);
            this._values.push(value);
        }
    }
} */

const store = new NodeStorage();
store.set(root1, 'varun');
store.set(root2, 'surbhi');
store.set(nodeA, 'toffee');

/* console.log('getter', store.get(root1), store.get(root2), store.get(nodeA));
console.log('has', store.has(root1), store.has(root2), store.has(nodeA));

console.log('getter', store.get(null), store.get(undefined), store.get(nodeB));
console.log('has', store.has(null), store.has(undefined), store.has(nodeB)); */


/* const windowSetTimeout = window.setTimeout;
const timeoutIds = [];

const setTimeout = (callback, delay) => {
    const timeoutId = windowSetTimeout(callback, delay);
    timeoutIds.push(timeoutId);

    const clearAllTimeouts = () => {
        timeoutIds.forEach(clearTimeout);
        return 'cleared all timeouts';
    }

    return {
        timeoutId,
        clearAllTimeouts
    }
}

setTimeout(() => {
    console.log('first timeout');
}, 1000);

setTimeout(() => {
    console.log('second timeout');
}, 2000);

setTimeout(() => {
    console.log('third timeout');
}, 3000);

setTimeout(() => {
    console.log('fourth timeout');
}, 4000);

const obj = setTimeout(() => {
    console.log('fifth timeout');
}, 5000);

setTimeout(() => {
    console.log(obj.timeoutId);
    console.log(obj.clearAllTimeouts());
}, 0); */


const debounce = (fn, delay = 1000) => {
    let timeoutId;

    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn, delay);
    }
}

const throttle = (fn, delay = 1000) => {
    let last = Date.now();
    return (...args) => {
        const now = Date.now();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    }
}

const log = () => {
    console.log('click event logged');
}
// document.addEventListener('click', debounce(log));
// document.addEventListener('click', throttle(log));

const romanToInt = (str) => {
    const romanSymbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // current and your previous symbol.
    // if current > previous : add it to the result
    // else subtract current from result;

    const strArr = str.split('');
    let result = romanSymbols[strArr[strArr.length - 1]];

    for(let i = strArr.length - 2; i >= 0; i--) {
        const previousNum = romanSymbols[strArr[i + 1]];
        const currentNum = romanSymbols[strArr[i]];

        if (currentNum > previousNum) {
            result += currentNum;
        } else {
            result -= currentNum;
        }
    }

    return result;
}

// console.log(romanToInt('MCMXCIV'));

const intToRoman = (num) => {
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousands = ['', 'M', 'MM', "MMM"];

    const unitDigit = num % 10;
    const tenthDigit = Math.floor((num%100)/10);
    const hundredthDigit = Math.floor((num%1000) / 100);
    const thousandthDigit = Math.floor(num/1000);

    return thousands[thousandthDigit] + hundreds[hundredthDigit] + tens[tenthDigit] + ones[unitDigit];
};

// console.log(intToRoman(1333));

class ArrayIterator {
    constructor(list) {
        this._list = list;
        this.count = -1;
    }

    flatten() {
        const value = this._list[this.count];
        if (!Array.isArray(value)) {
            return [value];
        } else {

            const flat = (arr) => {
                const result = [];

                for(let item of arr) {
                    if (!Array.isArray(item)) {
                        result.push(item);
                    } else {
                        result.push(...flat(item));
                    }
                }
                return result;
            }

            return flat(value);

        }
    }

    [Symbol.iterator]() {
        return {
            next: () => {

               this.count++;
               if (this.count >= this._list.length) {
                   this.count = -1;
                   return {
                       value: undefined,
                       done: true
                   }
               }
               const flattened = this.flatten();
               this._list.splice(this.count, 1, ...flattened);
               return {
                   value: this._list[this.count],
                   done: false
               }
            }
        }
    }
}

iterativeArr = new ArrayIterator(a);

/* for(let num of iterativeArr) {
    console.log(num);
} */

// console.log('array a: ', a);

let nums = [1,2,3,4,5];

nums = new Proxy(nums, {
    get(target, prop) {
        if (prop >= 0 && prop < target.length) {
            return target[prop];
        } else {
            const idx = Math.abs(+prop + target.length) % target.length;
            return target[idx];
        }
    },
    set(target, prop, value) {
        if (prop >= 0 && prop < target.length) {
            target[prop] = value;
        } else {
            const idx = Math.abs(+prop + target.length) % target.length;
            target[idx] = value;
        }
        return true;
    }
});

console.log(nums[33]);
console.log(nums[33] = 52);
console.log(nums[33]);

/* root2.addEventListener('click', (e) => {
    let moveOffset = 100;
    for(let i = 0; i <= moveOffset; i++) {
        setTimeout(() => {
            e.target.style.left = `${i}px`;
        }, i*10)
    }
}); */

const moveNode = (node, newParent) => {
    newParent.appendChild(node);
}

// moveNode(nodeB, root1);

const numToString = (num) => {
    if (num === 0) {
        return 'zero';
    }

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num <= 10) {
        return ones[num];
    }
    if (num <= 19) {
        return teens[num];
    }
    const tenthDigit = tens[Math.floor(num/10)];
    const unitDigit = ones[num % 10];

    if (unitDigit === 0) {
        return tenthDigit;
    }

    return tenthDigit + unitDigit;

}

console.log(numToString(48));

Array.prototype.myCustomMap = function(fn) {
    const result = [];
    this.forEach((i, idx) => {
        result.push(fn(i, idx));
    });
    return result;
}

Array.prototype.myCustomFilter = function(comparator, idx) {
    const result = [];
    this.forEach((i, idx) => {
        if (comparator(i, idx)) {
            result.push(i);
        }
    });
    return result;
}

Array.prototype.myCustomReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let idx = 0;
    if (!initialValue) {
        accumulator = this[0];
        idx = 1;
    }
    for(let i = idx; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

let arr = [1,2,3,4];

/* console.log(arr.myCustomMap(i => i*5));
console.log(arr.myCustomFilter(i => i%2));
console.log(arr.myCustomReduce((ac, cu) => {
    ac += cu;
    return ac;
}, 10)); */

/* const promise = new Promise((res, rej) => {
    res('i am resolved');
});

promise.then(console.log);
promise.catch(console.error);
promise.finally(() => console.log('completed')); */

class CustomPromise {
    constructor(executor) {
        this.result = null;
        this.state = 'PENDING';
        this.handlers = [];
        this.catchers = [];

        const resolve = (result) => {
            if (this.state !== 'PENDING') {
                return;
            }
            this.state = 'FULFILLED';
            this.result = result;
            this.handlers.forEach(h => h(result));
        };

        const reject = (result) => {
            if (this.state !== 'PENDING') {
                return;
            }
            this.state = 'FAILED';
            this.result = result;
            this.catchers.forEach(c => c(result));
        };

        executor(resolve, reject);
    }

    then(fn) {
        if (this.state === 'FULFILLED') {
            fn(this.result);
        } else {
            this.handlers.push(fn);
        }
    }

    catch(fn) {
        if (this.state === 'FAILED') {
            fn(this.result);
        } else {
            this.catchers.push(fn);
        }
    }

    finally(fn) {
        if (this.state === 'PENDING') {
            return;
        }
        fn();
    }
}

const custom_promise = new CustomPromise((res, rej) => {
    res('i am resolved from customPromise');
});

custom_promise.then(console.log);
custom_promise.catch(console.error);
custom_promise.finally(() => console.log('completed'));


Promise.prototype.myPromiseAll = function(arr) {
    const result = [];
    let promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((promise, idx) => {
            promise.then(value => {
                result[idx] = value;
                promiseCompleted++;

                if (promiseCompleted >= arr.length) {
                    resolve(result);
                }
            }).catch(err => reject(err));
        });
    });
}


const moveBox = (timePassed) => {
    root2.style.left = timePassed/5 + 'px';
}

/* let start = Date.now();

let timer = setInterval(() => {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
        clearInterval(timer);
        return;
    }
    moveBox(timePassed);
}, 20) */

const moveRoot = () => {
    let move = 0;
    let id = setInterval(() => {
        if (move === 350) {
            clearInterval(id);
        }
        root2.style.left = move++ + 'px';
    }, 20)
}

moveRoot();

/* root2.animate([
    {
        transform: 'translate(100px)'
    }
], {
    duration: 1000,
    iterations: 1
}) */

class CustomPromise {
    constructor(executor) {
        this.result = null;
        this.handlers = [];
        this.catchers = [];
        this.state = 'PENDING';

        const resolve = (result) => {
            if (this.state !== 'PENDING') {
                return;
            }
            this.result = result;
            this.state = 'FULFILLED';
            this.handlers.forEach(handler => handler(result));
        };

        const reject = (result) => {
            if (this.state !== 'PENDING') {
                return;
            }
            this.result = result;
            this.state = 'FAILED';
            this.catchers.forEach(handler => handler(result));
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
            return ;
        }
        fn();
    }
}

Promise.prototype.customPromiseAll = function(promises) {
    if (!promises || !promises.length) {
        return Promise.resolve([]);
    }
    const result = [];
    let promisesCompleted = 0;

    return new Promise((res, rej) => {
        promises.forEach((promise, idx) => {
            promise.then(val => {
                result[idx] = val;
                promisesCompleted++;

                if (promisesCompleted >= promises.length) {
                    res(result);
                }
            }).catch(err => {
                rej(err);
            });
        });
    });
}

Promise.prototype.myPromiseAllSettled = function(arr) {
    const result = [];
    let promiseCompleted = 0;
    const prepareResult = (value, failed = false) => {
        if (!failed) {
            return {
                state: 'FULFILLED',
                value
            }
        } else {
            return {
                state: 'FAILED',
                reason: value
            }
        }
    }
    return new Promise((resolve) => {
        arr.forEach((promise, idx) => {
            promise.then(value => {
                result[idx] = prepareResult(value);
            }).catch(err => {
                result[idx] = prepareResult(err, true);
            }).finally(() => {
                promiseCompleted++;

                if (promiseCompleted >= arr.length) {
                    resolve(result);
                }
            });
        });
    });
}

Promise.prototype.customPromiseAny = function(promises) {
    if (!promises || !promises.length) {
        return Promise.resolve([]);
    }
    const errors = [];

    return new Promise((res, rej) => {
        promises.forEach((promise, idx) => {
            promise.then(val => {
                res(val);
            }).catch(err => {
                errors[idx] = err;
                if (errors.length >= promises.length) {
                    rej(new AggregateError('none completed', errors));
                }
            });
        });
    });
}

Promise.prototype.customPromiseRace = function(promises) {
    if (!promises || !promises.length) {
        return Promise.resolve([]);
    }
    return new Promise((res, rej) => {
        promises.forEach((promise, idx) => {
            promise.then(val => {
                res(val);
            }).catch(err => {
                rej(err);
            });
        });
    });
}

function throttlePromises(fns, max) {
    let result = [];
    return new Promise((res, rej) => {
        let runningCount = 0;
        let queue = [...fns];
        const run = () => {
            while(runningCount < max && queue.length) {
                runningCount++;
                const fn = queue.shift();

                fn().then(result => {
                    runningCount--;
                    result.push(res);
                    run();
                }).catch(err => {
                    rej(err);
                })
            }

            if (result.length >= fns.length) {
                res(result);
            }
        };
        run();
    });
}

function throttle(fn, delay = 2000) {
    let waiting = false;
    let missedArgs = [];
    return function(...args) {
        if (!waiting) {
            waiting = true;
            fn.apply(this, args);

            setTimeout(() => {
                waiting = false;
                if (missedArgs.length) {
                    fn.apply(this, missedArgs);
                }
            }, delay)
            
        } else {
            missedArgs = [...args];
        }
    }
}


function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const ret = constructor.apply(obj, ...args);
    return ret ? ret : obj;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return curried.bind(this, ...args);
        }
    }
}

Array.prototype.myReduce = (reducerFn, initialVal) => {
    let accumulator = initialVal;
    let index = 0;
    if (!initialVal) {
        accumulator = this[0];
        index = 1;
    }
    for(let i = index; i < this.length; i++) {
        accumulator = reducerFn(accumulator, this[i], i, this);
    }
    return accumulator;
}
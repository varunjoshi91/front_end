function CustomPromise(executor) {
    let state = 'PENDING';
    let value = null;
    let handlers = [];
    let catches = [];

    function resolve(result) {
        if (state !== 'PENDING') {
            return;
        }
        state = 'FULFILLED';
        value = result;

        handlers.forEach(h => h(value));
    }

    function reject(err) {
        if (state !== 'PENDING') {
            return;
        }
        state = 'REJECTED';
        value = err;

        catches.forEach(c => c(value));
    }

    this.then = function(callback) {
        if (state === 'FULFILLED') {
            callback(value);
        } else {
            handlers.push(callback);
        }
    }

    this.catch = function(callback) {
        if (state === 'REJECTED') {
            callback(value);
        } else {
            catches.push(callback);
        }
    }

    executor(resolve, reject);

}

const doWork = (res, rej) => {
    setTimeout(() => {
        res('i am resolved');
    }, 1000);
}

let someText = new CustomPromise(doWork);

someText.then(console.log);
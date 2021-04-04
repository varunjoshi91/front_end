const taskList = [task(1000), task(2000), task(3000)];

Promise.prototype.myPromiseAll = function(promiseArr) {
    const result = [];
    let promiseCompleted = 0;
    return new Promise((res, rej) => {
        promiseArr.forEach((promise, idx) => {
            promise.then(result => {
                result[idx]= result;
                promiseCompleted += 1;
                if (promiseCompleted === promiseArr.length) {
                    res(result);
                }
            })
            .catch(error => {
                rej(error);
            })
        });
    });
}
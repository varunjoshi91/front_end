let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        writeToPage('timeout printed');
        // resolve('i printed this');
        reject(new Error('I rejected this'));
    }, 5000);
});

a.then(
    (val) => {
    console.log(val);
    }
    // (err) => {
    //     console.log(err);
    // }
).catch((err) => {
    console.log(err.message);
}).finally(() => {
    console.log('hoping this works');
});


/*************/

let delay = function(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => writeToPage('runs after 3 seconds'));

/*************/

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('from block 1');
        resolve('block 1 data');
    }, 2000);
}).then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result + ' block 2 data')
        }, 3000);
    });
}).then((result) => {
    console.log('block 3 data', result);
});


/*************/
window.addEventListener('unhandledrejection', (err) => {
    console.log('window catches this', err);
})

let a = new Promise((resolve, reject) => {
        // resolve('block 1 data');
        throw new Error('block 1 error');
}).then((result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result + ' block 2 data')
        }, 3000);
    });
}).then(
    (result) => {
    console.log(result, 'block 3 data');
    },
    (err) => {
        console.log('error caught first here and then sent further');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I caught it and sent it further', err);
            }, 2000);
        });
    }
).finally(() => {
    console.log('performing cleanup');
}).catch((err) => {
    throw err;
});

/*************/
Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve, reject) => {
        setTimeout(() => reject(3), 5000);
    })  // 3
  ]).then(console.log);
  /*************/

  
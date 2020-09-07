let counter = 0;
let getData = val => {
    console.log('print this', counter++, val);
}

let throttleFunc = (fn, delay) => {
    let flag = true;
    return (arguments) => {
        if (flag) {
            fn(arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    };
}

let betterFunc = throttleFunc(getData, 500);
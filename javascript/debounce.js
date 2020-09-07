let counter = 0;
let getData = val => {
    console.log('print this', counter++, val);
}

let debounce = (fn, delay) => {
    let timer;
    return (arguments) => {
        let bindedFunction = fn.bind(this, arguments);
        clearTimeout(timer);
        timer = setTimeout(bindedFunction, delay);
        /* timer = setTimeout(() => {
            fn(arguments);
        }, delay); */
    }
}

let betterFunc = debounce(getData, 300); // HTML button calls this function
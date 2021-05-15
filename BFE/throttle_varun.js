// simple throttle

function throttle(fn, delay = 200) {
    let last;

    return function(...args) {
        const now = Date.now();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn.apply(this, args);
    }
}


// BFE Throttle, when you wanna still cache the previous missed args

function throttle(fn, delay = 200) {
    let waiting = false;
    let missedArgs;

    return function(...args) {
        if (!waiting) {
            // do stuff
            waiting = true;
            fn.apply(this, args);

            window.setTimeout(() => {
                waiting = false;
                if (missedArgs) {
                    fn.apply(this, missedArgs);
                }
            }, delay)

        } else {
            missedArgs = [...args];
        }
    }
}

// BFE throttle with leading and trailing options


const throttle = (fn, delay = 200) => {
    let waiting = false;
    let lastArgs = [];

    return function(...args) {
        if (!waiting) {
            waiting = true;
            fn.apply(this, args);
            setTimeout(() => {
                waiting = false;
                if (lastArgs.length) {
                    fn.apply(this, lastArgs);
                }
            }, delay)
        } else {
            lastArgs = [...args];
        }
    }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    // your code here
}
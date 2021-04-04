const throttle = (fn, delay = 3000) => {
    let last = 0;
    return function(...args) {
        const now = Date.now();
        if (delay > now - last) {
            return;
        }
        last = now;
        return fn(...args);
    }
};

const debounce = (fn, delay = 1000) => {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
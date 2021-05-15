
// Simple debounce

function debounce(fn, delay = 200) {
    let timerId;

    return function(...args) {
        if (timerId) {
            window.clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

// Enhanced debounce with leading and trailing

function debounce(func, wait, option = { leading: false, trailing: true }) {
  
    if (!option.leading && !option.trailing) {
        return () => null;
    }

    let timerId;

    return function(...args) {

        let fnInvoked = false;
        if (!timerId && option.leading) {
            func.apply(this, args);
            fnInvoked = true;
        }

        window.clearTimeout(timerId);

        timerId = setTimeout(() => {
            if (!fnInvoked && option.trailing) {
                func.apply(this, args);
            }
            timerId = null;
        }, wait)
    }
}
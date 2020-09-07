// Debounce https://www.youtube.com/watch?v=B1P3GFa7jVc

const debounce = (fn, delay) => {
	let timeOutId;
	return function(...args) {
		if (timeOutId) {
			clearTimeout(timeOutId);
		}
		timeOutId = setTimeout(() => {
			fn(...args);
		}, delay);
	}
}


const button = document.getElementById('button');
const doSomething = () => {
   console.log('doing something');
};

const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    } else {
      fn(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  }
};

const debounce = (fn, delay = 500) => {
  let id;
  return (...args) => {
    let context = this;
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn.call(this,...args);
    }, delay);
    
  }
};

button.addEventListener('click', debounce(doSomething, 2000));
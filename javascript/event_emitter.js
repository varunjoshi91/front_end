// https://gist.github.com/feargswalsh92/e73240f9cb37af97ea83417460936a1e
// https://leetcode.com/discuss/interview-question/331978/facebook-phone-screen-implement-event-emitter
// https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/

export class Emitter {

    constructor() {
        this._events = {};
    }

    subscribe(event, fn) {
        if (this._events[event]) {
            this._events[event].push(fn);
        } else {
            this._events[event] = [fn];
        }
        return function release() {
            delete this._events[event];
            return true;
        };
    }

    emit(event, ...args) {
        const funcs = this._events[event];
        if (funcs) {
            funcs.forEach(i => i(args));
        }
    }

}

const emitter = new Emitter();
const sub = emitter.subscribe('event_name', (...args) => {
    console.log('event1 runs with args: ', ...args)
});

const sub2 = emitter.subscribe('event_name', (...args) => {
    console.log('event2 runs with args: ', ...args)
});

sub.release();
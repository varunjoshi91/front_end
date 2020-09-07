// Write an emitter class: /* emitter = new Emitter();
// 1. Support subscribing to events. sub = emitter.subscribe('event_name', callback); sub2 = emitter.subscribe('event_name', callback2);
// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar);
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release(); // `sub` is the reference returned by `subscribe` above

console.log('this runs');

class Emitter {
    
    constructor() {
        this._events = {};
    }

    subscribe(eventName, fn) {
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        this._events[eventName].push(fn);

        const release = () => {
            delete this._events[eventName];
            return true;
        }

        return {release};
    }

    emit(eventName, ...args) {
        if (!this._events[eventName]) {
            return false;
        }
        this._events[eventName].forEach(i => i.apply(null, args));
        return true;
    }

}


let emitter = new Emitter();
let sub = emitter.subscribe('event_name', (foo, bar) => {
    console.log('event emitted with ', foo, bar);
});
let sub2 = emitter.subscribe('event_name', (foo, bar) => {
    console.log('event2 emitted with ', foo, bar);
});
emitter.emit('event_name', 'varun', 'joshi');
sub.release();

emitter.emit('event_name', 'varun', 'joshi');
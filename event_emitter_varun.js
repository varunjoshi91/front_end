class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
        const release = () => {
            delete this.events[eventName];
            return true;
        }
        return { release };
    }

    emit(eventName, ...args) {
        const callbacks = this.events[eventName];
        if (!callbacks || !callbacks.length) {
            return false;
        }
        for(let callback of callbacks) {
            callback.apply(this, args);
        }
        return true;
    }
}

// Write an emitter class: /* emitter = new Emitter();
// 1. Support subscribing to events. sub = emitter.subscribe('event_name', callback);
// sub2 = emitter.subscribe('event_name', callback2);
// 2. Support emitting events. // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar);
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release();
// `sub` is the reference returned by `subscribe` above

const emitter = new EventEmitter();

const sub1 = emitter.subscribe('click', (param) => console.log(param));
emitter.emit('click', 'hey1');
emitter.emit('click', 'hey2');
emitter.emit('click', 'hey3');
emitter.emit('click', 'hey4');
sub1.release();
emitter.emit('click', 'hey5');
emitter.emit('click', 'hey7');
emitter.emit('click', 'hey9');
emitter.emit('click', 'hey11');
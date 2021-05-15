/* 
const emitter = new Emitter()

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)

emitter.emit('event1', 1, 2);

sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore

*/


class EventEmitter {
    constructor() {
        this.callbacks = {};
    }

    subscribe(eventName, callbackFn) {
        if (!this.callbacks[eventName]) {
            this.callbacks[eventName] = [callbackFn];
        } else {
            this.callbacks[eventName].push(callbackFn);
        }


        return {
            release: () => {
                delete this.callbacks[eventName];
                return true;
            }
        }
    }

    emit(eventName, ...args) {
        const callbacks = this.callbacks[eventName] ?? [];
        callbacks.forEach(callback => {
            callback.apply(this, args);
        });
    }

}
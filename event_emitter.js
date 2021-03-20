
// Write an emitter class: /* emitter = new Emitter();
// 1. Support subscribing to events. sub = emitter.subscribe('event_name', callback);
// sub2 = emitter.subscribe('event_name', callback2);
// 2. Support emitting events. // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar);
// 3. Support unsubscribing existing subscriptions by releasing them. sub.release();
// `sub` is the reference returned by `subscribe` above


function Emitter() {
  this.events = new Map();
}

Emitter.prototype.subscribe = function(evtName, callback) {

  this.events.set(evtName, callback);
  const self = this;

  return {
    release: function() {
      self.events.delete(evtName);
    }
  };
}

Emitter.prototype.emit = function(evtName, ...params) {
  if (this.events.has(evtName)) {
    const event = this.events.get(evtName);
    event.call(this, ...params);
  }
}

const emitter = new Emitter();

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
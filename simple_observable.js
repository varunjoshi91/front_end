// https://medium.com/@fknussel/a-simple-observable-implementation-c9c809c89c69

/* const numbers$ = Rx.Observable.from([0, 1, 2, 3, 4]);
numbers$.subscribe(
  (value) => console.log(value),
  (err) => console.error(err),
  () => console.info('done')
); */

function Observable(subscribe) {
  this.subscribe = subscribe;
}

Observable.from = (values) => {
  return new Observable((observer) => {
    values.forEach((val) => observer.next(val));
    observer.complete();

    const unsubscribe = () => {
      console.log("unsubscribed");
    };

    return { unsubscribe };
  });
};

const observer = {
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.info("done");
  },
};

const numbers$ = Observable.from([0, 1, 2, 3, 4]);
const subscription = numbers$.subscribe(observer);
setTimeout(subscription.unsubscribe, 500);

class Observer {
  constructor(handlers) {
    this.handlers = handlers;
    this.isUnsubscribed = false;
  }

  next(value) {
    if (this.handlers.next && !this.isUnsubscribed) {
      this.handlers.next(value);
    }
  }

  error(error) {
    if (!this.isUnsubscribed && this.handlers.error) {
      this.handlers.error(error);
    }
    this.unsubscribe();
  }

  complete() {
    if (!this.isUnsubscribed && this.handlers.complete) {
      this.handlers.complete();
    }
    this.unsubscribe();
  }

  unsubscribe() {
    this.isUnsubscribed = true;
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }
}

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(obs) {
    const observer = new Observer(obs);
    observer._unsubscribe = this._subscribe(observer);

    return {
      unsubscribe() {
        observer.unsubscribe();
      },
    };
  }
}

Observable.from = (values) => {
  return new Observable((observer) => {
    values.forEach((value) => observer.next(value));

    observer.complete();

    return () => {
      console.log("Observable.from: unsubscribed");
    };
  });
};
const numbers$ = Observable.from([0, 1, 2, 3, 4]);
const subscription = numbers$.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.info("done");
  },
});
setTimeout(subscription.unsubscribe, 500);

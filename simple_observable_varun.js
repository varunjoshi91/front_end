// https://www.youtube.com/watch?v=m40cF91F8_A&ab_channel=AngularNYC
// https://stackblitz.com/edit/typescript-im9hxp

console.clear();

class Observer {

    constructor(handlers) {
        this.handlers = handlers;
        this.isUnsubscribed = false;
    }

    next(val) {
        if (this.handlers.next && !this.isUnsubscribed) {
            this.handlers.next(val);
        }
    }

    error(err) {
        if (this.handlers.error && !this.isUnsubscribed) {
            this.handlers.error(err);
        }
    }

    complete() {
        if (this.handlers.complete && !this.isUnsubscribed) {
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
    constructor(source) {
        this._source = source;
    }

    subscribe(...obs) {
        let observer;
        if (obs.length === 1 || typeof obs[0] === 'object') {
            observer = new Observer(obs[0]);
        } else {
            const modifiedObs = {
                next: obs[0],
                error: obs[1],
                complete: obs[2]
            }
            observer = new Observer(modifiedObs);
        }
        observer._unsubscribe = this._source(observer);
        
        return {
            unsubscribe() {
                console.log('unsubscribed');
                observer.unsubscribe();
            }
        }
    }
}

const observable = new Observable((obs) => {
  obs.next("my name is varun");
  obs.next("surbhi");
  obs.complete();

  // obs.error("errored out");
  obs.next("after");
});

const observer = observable.subscribe(
    (val) => {
        console.log('observer custom handler', val);
    },
    (err) => {
        console.log('observer custom handler', err);
    },
    () => {
        console.log('inside completetion');
    }
);

observer.unsubscribe();

/* observable.subscribe({
    next: (val) => {
        console.log('observer custom handler', val);
    },
    error: (err) => {
        console.log('observer custom handler', err);
    },
    complete: () => {
        console.log('inside completion');
    }
}); */
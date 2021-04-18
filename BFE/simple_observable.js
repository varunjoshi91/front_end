// https://bigfrontend.dev/problem/create-an-Observable

class Observer {
    constructor(handlers) {
      
      if (typeof handlers === 'function') {
        this.handlers = {
          next: handlers
        }
      } else {
        this.handlers = handlers; // next, error, complete
      }
  
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
      this.unsubscribe();
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
    
    constructor(setup) {
      this.source = setup;
    }
   
    subscribe(subscriber) {
      const observer = new Observer(subscriber);
      observer._unsubscribe = this.source(observer);
  
      return {
        unsubscribe() {
          observer.unsubscribe();
        }
      }
    }
  }
// https://bigfrontend.dev/problem/create-lazyman


// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

class ALazyMan {
    constructor(name, logFn) {
      this.name = name;
      this.logFn = logFn;
  
      this.callBacks = [];
      this.urgentCallbacks = [];
  
      this.greet();
  
      setTimeout(() => {
        this._executeNext();
      }, 0);
    }
  
    greet() {
      this.callBacks.push(['greet', this.name]);
      return this;
    }
  
    eat(food) {
      this.callBacks.push(['eat', food]);
      return this;
    }
  
    sleep(time) {
      this.callBacks.push(['sleep', time]);
      return this;
    }
  
    sleepFirst(time) {
      this.urgentCallbacks.push(['sleep', time]);
      return this;
    }
  
    _executeNext() {
      let task = this.urgentCallbacks.shift();
      if (!task) {
        task = this.callBacks.shift();
      }
      if (!task) {
        return;
      }
  
      const [action, payload] = task;
  
      switch(action) {
        case 'greet':
          this.logFn(`Hi, I'm ${payload}.`);
          this._executeNext();
          return;
  
        case 'eat':
          this.logFn(`Eat ${payload}.`);
          this._executeNext();
          return;
  
        case 'sleep':
          setTimeout(() => {
            this.logFn(`Wake up after ${payload} second${payload > 1 ? 's' : ''}.`);
            this._executeNext();
            return;
          }, payload * 1000);
      }
    }
  }
  
  /**
   * @param {string} name
   * @param {(log: string) => void} logFn
   * @returns {Laziness}
   */
  function LazyMan(name, logFn) {
    // your code here
    return new ALazyMan(name, logFn);
  }
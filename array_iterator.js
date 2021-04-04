class ArrIterator {
    constructor(list) {
        this.list = list;
        this.count = -1;
    }

    flatten() {
        if (!Array.isArray(this.list[this.count])) {
            return [this.list[this.count]];
        } else {
            const flat = (arr) => {
              const result = [];
              for (let item of arr) {
                if (!Array.isArray(item)) {
                  result.push(item);
                } else {
                  result.push(...flat(item));
                }
              }
              return result;
            };

            return flat(this.list[this.count]);
        }
    }

    [Symbol.iterator]() {
        return {
            next: ()=>{
                this.count++;
                
                if (this.count >= this.list.length) {
                    this.count = -1;
                    return {
                        value: undefined,
                        done: true
                    }
                }
                const flattened = this.flatten();
                this.list.splice(this.count, 1, ...flattened);
                return {
                    value: this.list[this.count],
                    done: false
                }
            }
        };
    }
}
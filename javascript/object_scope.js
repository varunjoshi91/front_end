let a = {
    count: 1,
    increment: function() {
        console.log(this.count, this.count++);
    },
    test() {
        console.log('does this work', this.count);
    },
    test2: () => {
        console.log('hoping this works too', this.count, this);
    }
}

function B() {
    this.count = 0;

    increment = function() {
        console.log(`Incrementing count from ${this.count} to ${++this.count}`);
    }
}

B.prototype.incrementMe = function() {
    console.log(`IncrementingMe count from ${this.count} to ${++this.count}`);
}

function FunctionalClass(name) {
    this.name = name;
    this.test = function() {
        console.log('the name is ', this.name);
    }
    this.test2 = () => {
        console.log('the name2 is ', this.name);
    }
}

FunctionalClass.prototype.getFullName = function() {
    console.log('inside function prototype', this.name);
}

let obj = new FunctionalClass('varun');
obj.getFullName();
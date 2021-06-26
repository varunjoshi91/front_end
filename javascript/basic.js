function Person1(name) {
    this.name = name;

    this.getName = function() {
        console.log('inside getName', this.name, this);
    }

    this.nestedFunction = function() {
        setTimeout(() => {
            console.log('this is a nested function run', this.name, this);
        })
        /* const that = this;
        (function () {
            console.log('this is a nested function run', that.name, that);
        }()); */
    }
}

Person1.prototype.getFullNameAndAge = function() {
    console.log('hopefully getting full name', this.name, this.age);
}

const varun = new Person1('varun');
/* varun.getName();
varun.getFullName();
varun.nestedFunction(); */

/* const borrowedFunction = varun.getName;
borrowedFunction(); */

class Person2 extends Person1 {
    constructor(name) {
        super(name);
        this.name = name;
        this.getName = () => {
            console.log('inside getName', this.name, this);
        }
    }

    static staticMethod() {
        console.log('wonder where this exist', this);
    }

    getFullName() {
        console.log('inside getName', this.name, this);
    }
}

class Person3 extends Person2 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getAge() {
        console.log('my age is ', this.age);
    }
}

Person3.prototype.newMethod = () => {
    console.log('hopefully Im getting the window pointer', this);
}

let surbhi = new Person3('surbhi', 28);


function Person4() {
    let state = 'pending';

    function getState() {
        return this.state;
    }
}
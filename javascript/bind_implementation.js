let obj = {
    fName: 'varun',
    lName: 'joshi'
}

function getName(state, ...moreStates){
    return this.fName + ' ' + this.lName + ' ' + state + ' ' + moreStates[0];
}

/* Function.prototype.myBind = function(...args) {
    let params = args.slice(1);
    func = this;
    return function(...newParam) {
        return func.apply(args[0], [...params, ...newParam]);
    }
} */

Function.prototype.myBind = function(...args) {
    return (...newParam) => {
        return this.apply(args[0], [...args.slice(1), ...newParam]);
    }
}

let test = getName.myBind(obj, 'Chandigarh');
console.log(test('Punjab', 'Haryana'));

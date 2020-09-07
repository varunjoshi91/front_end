let obj = {
    fName: 'varun',
    lName: 'joshi'
}

function getName(state, ...moreStates){
    return this.fName + ' ' + this.lName + ' ' + state + ' ' + moreStates.join(' ');
}

Function.prototype.myCall = function(...args) {
    return this.bind(args[0], args[1], args.slice(2))();
}

Function.prototype.myApply = function(...args) {
    return this.bind(args[0], [args.slice(1)])();
}

// console.log(getName.call(obj, 'Chandigarh', 'Delhi'));
// console.log(getName.myCall(obj, 'Chandigarh', 'Delhi'));

console.log(getName.apply(obj, ['Chandigarh', 'Delhi', 'haryana', 'Bihar']));
// console.log(getName.myCall(obj, 'Chandigarh', 'Delhi'));


// writeToPage(anagram('ab', 'abc'));
// console.log(flatten([1,2,5,3,4,null,6]));
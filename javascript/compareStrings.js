const compareStrings = function (A, B) {
    if (!A && !B) {
        return true;
    }
    if (A && !B) {
        return true;
    }

    if (B.length > A.length) {
        return false;
    }

    let obj = {};

    for(let i of A.split('')) {
        obj[i] ? ++obj[i] : obj[i] = 1;
    }

    for(let i of B.split('')) {
        if(!obj[i] || obj[i] === 0) {
            return false;
        }
        obj[i]--;
    }

    return true;

}
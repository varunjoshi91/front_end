// https://bigfrontend.dev/problem/what-is-composition-create-a-pipe/discuss?sort=time

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
    // your code here
    return function(x) {
        return funcs.reduce((result, fn) => {
            return fn(result);
        }, x);
    }
}
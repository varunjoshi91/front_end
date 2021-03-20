function rtf(inputStr, styleArr) {
    if (!inputStr || !inputStr.length) {
        return;
    }
    if (!styleArr || !styleArr.length) {
        return inputStr;
    }
    
    let inputArr = inputStr.split('');
    let styles = {};

    for(const style of styleArr) {
        const startIdx = style[0];
        const endIdx = style[1] + 1;
        styles[startIdx] = styles[startIdx] ? styles[startIdx].push(`<${style[2]}>`): [`<${style[2]}>`];
        styles[endIdx] = styles[endIdx] ? styles[endIdx].push(`</${style[2]}>`): [`</${style[2]}>`];
    }

    console.log(styles);
    
    for(let i = inputArr.length - 1; i >=0; i--) {
        if(!styles[i]) {
            continue;
        }
        inputArr.splice(i, 0, styles[i]);
    }

    return inputArr.join('');

}


const styleArr = [[0,2,'i'], [4,9,'b'], [7,10, 'u']];

// console.log(rtf('Hello,world', styleArr));

function sum(...elems) {
    console.log(arguments, elems);
    return elems.reduce((acc, i) => acc += i);
}

const progress = document.getElementById('progress');
let i = 0;
const count = () => {
    do {
        i++;
        progress.innerHTML = i;
    } while (i < 1e3);

    if (i < 1e9) {
        setTimeout(count);
    }
}

count();
/* Your task is to implement a simplified version of text editor. All operations that should be supported are listed below. Partial credit will be given for each implemented operation. Please submit often to ensure partial credits are captured.

Implementation tips

Implement operations and provided steps one by one, and not all together, keeping in mind that you will need to make refactors to support each additional step.
In the first four steps you can initially ignore the first array element ("0", "1", "2", etc). It will be used starting from the fifth step, but is passed in to all test cases for consistency.

1. APPEND should append the provided string to the current text:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"]
]

// returns: "Hey there!"
2. BACKSPACE should remove the last character of the current text:

input = [
    ["0", "APPEND", "Hey you"],
    ["1", "BACKSPACE"]
]

// returns: "Hey yo"
and

input = [
    ["0", "APPEND", "Hey you"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
]

// returns: "Hey y"
BACKSPACE should do nothing if there are no characters to delete:

input = [
    ["0", "APPEND", "!"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
]

// returns: ""
3. UNDO should undo the previous APPEND or BACKSPACE operation:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"],
    ["3", "UNDO"],
    ["4", "UNDO"]
]

// returns: "Hey"
and should do nothing if there are more UNDOs than APPEND and BACKSPACE operations:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "UNDO"]
]

// returns: ""
4. REDO should redo the previous UNDO operation:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "UNDO"],
    ["3", "REDO"]
]

// returns: "Hey there"
and should do nothing when there are more REDOs than UNDOs:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "REDO"],
    ["3", "REDO"]
]

// returns: "Hey"
and should only work immediately after an UNDO or REDO operation:

input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "APPEND", " there"],
    ["3", "REDO"]
]

// returns: " there"
5. input should be applied in chronological order according to the UNIX timestamp provided in the first array element.

input = [
    ["1548185072722", "APPEND", "ey"],
    ["1548185072721", "APPEND", "H"]
]

// returns: "Hey"
6. SELECT should perform the operation following it on the range from start to end. Start index is inclusive and end index is exclusive. If the selection is greater than length of the current text, select up to the end. If SELECT operation is followed by another SELECT, the most recent should be used. If the start of the SELECT is outside the range of the current text, the entire operation should be ignored. The different uses of SELECT are further described below.

SELECT and BACKSPACE should remove the selected characters:

input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BACKSPACE"]
]

// returns: "Hlo"
SELECT and APPEND should replace the selected characters with the appended characters:

input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "2", "5"],
    ["1548185072723", "APPEND", "y there"]
]

// returns: "Hey there"
7. BOLD should APPEND * characters before the first selected character and after the last selected character when characters are selected:

input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BOLD"]
]

// returns: "H*el*lo"
Example

For
input = [["0", "APPEND", "Hey"],
         ["1", "APPEND", " there"],
         ["2", "APPEND", "!"]]
the output should be textEditor(input) = "Hey there!".

For
input = [["0", "APPEND", "This"],
         ["1", "APPEND", " is "],
         ["2", "BACKSPACE"],
         ["3", "APPEND", " a "],
         ["4", "APPEND", "second test"]]
the output should be textEditor(input) = "This is a second test".

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string input

An array of operations need to be applied to the text editor. It is guaranteed that each operation is one of the operations described in the description, all operation parameters are given in correct format, and the text editor will never be in an incorrect state that is not described in the description.

[output] string

The final text in the text editor after applying all operations.

[JavaScript] Syntax Tips

 */


function handleStep(step, resultString, inputArr, index) {
    switch(step) {
        case 'UNDO' : {
            let localIndex = index - 1;
            while(localIndex >=0 && inputArr[localIndex][1] === 'UNDO') {
                localIndex -= 2;
            }
            localIndex = localIndex < 0 ? 0 : localIndex;
            console.log('localIndex', localIndex);
            const [_, ins, string] = inputArr[localIndex];
            console.log('string', resultString);
            if (ins === 'APPEND') {
                resultString = resultString.slice(0, resultString.length - string.length);
            } else if (ins === 'BACKSPACE') {
                resultString = '';
            }
            console.log('res string', resultString);
            return resultString;
        }
    }
}

function textEditor(input) {
    if (!input) {
        return '';
    }
    let result = '';
    
    input.forEach((instruction, index) => {
       const [idx, step, string] = instruction;
        
        switch(step) {
            case 'APPEND': {
                result += string;
                break;
            }
            case 'BACKSPACE': {
                result = result.slice(0, result.length - 1);
                break;
            }
            case 'UNDO': {
                result = handleStep(step, result, input, index);
                break;
            }
        } 
    });
    
    return result;
}

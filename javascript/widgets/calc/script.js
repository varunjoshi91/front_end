const calculator = document.querySelector('.calculator');

const valueBox = document.createElement('input');
valueBox.setAttribute('type', 'number');
valueBox.setAttribute('placeholder', 0);
valueBox.classList.add('value');
calculator.append(valueBox);

const supportedOps = ['\u00F7', 'X', '-', '+'];

const operationWrapper = document.createElement('div');
operationWrapper.classList.add('operation-wrapper');

for (let op of supportedOps) {
    const opBox = document.createElement('button');
    opBox.classList.add('basic-ops');
    if (op === "=") {
        opBox.classList.add('equals');
    }
    opBox.append(op);
    operationWrapper.append(opBox);
}

calculator.append(operationWrapper);

const numsWrapper = document.createElement('div');
numsWrapper.classList.add('nums-wrapper');

for (let i = 0; i < 10; i++) {
    const numBox = document.createElement('button');
    numBox.classList.add('nums');
    if (i === 0) {
        numBox.classList.add('zero');
    }
    numBox.append(i.toString());
    numsWrapper.append(numBox);
}

const equalsButton = document.createElement('button');
equalsButton.classList.add('equals');
equalsButton.append("=");
numsWrapper.append(equalsButton);
calculator.append(numsWrapper);
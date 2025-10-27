function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //check if the input numbers are valid

    if(!isNaN(num1) && (!isNaN(num2))){
        //perform the operation
        let resultMultiply = multiply(num1, num2);
        let resultAdd = addition(num1, num2);
        let resultDivide = division(num1, num2);

        //display results
        displayresult(resultMultiply, resultAdd, resultDivide)
    } else {
        displayresult('please enter valid numbers');
    }
}

function multiply(a,b){
    //introduce a debugger statement to pause execution
    debugger;

    return a * b;
}

function addition(a,b){
    debugger;
    return a + b;
}

function division(a,b){
    debugger;
    return a / b;
}

function displayresult(resultMultiply, resultAdd, resultDivide){
    resultElement = document.getElementById('result');
    resultElement.textContent = `the result  for multiplication is ${resultMultiply},
    the result for addition is ${resultAdd},
    the result for division is ${resultDivide}`;
}
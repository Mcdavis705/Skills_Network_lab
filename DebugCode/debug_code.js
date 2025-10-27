function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //check if the input numbers are valid

    if(!isNaN(num1) && (!isNaN(num2))){
        //perform the operation
        let result = multiply(num1, num2);

        //display results
        displayresult(result)
    } else {
        displayresult('please enter valid numbers');
    }
}

function multiply(a,b){
    //introduce a debugger statement to pause execution
    debugger;

    return a * b;
}

function displayresult(result){
    resultElement = document.getElementById('result');
    resultElement.textContent = `the result is ${result}`;
}
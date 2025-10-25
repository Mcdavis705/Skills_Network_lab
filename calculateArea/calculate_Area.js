let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    if (length && width){
        let area = length * width;
        document.getElementById("result").innerText = `The area of the rectangle is ${area}`
    } else {
        document.getElementById("result").style.color="red"
        document.getElementById("result").innerText = 'The input fields cannot be empty'
    }
}

let grocery1Amount = 0;
let grocery2Amount = 0;
let grocery3Amount = 0;

function calculateTotalAmount(){
    grocery1Amount = parseFloat(document.getElementById('grocery1').value);
    grocery2Amount = parseFloat(document.getElementById('grocery2').value);
    grocery3Amount = parseFloat(document.getElementById('grocery3').value);

    if(isNaN(grocery1Amount) || isNaN(grocery2Amount) || isNaN(grocery3Amount)) {
        grocery1Amount = isNaN(grocery1Amount) ? 0 : grocery1Amount;
        grocery2Amount = isNaN(grocery2Amount) ? 0 : grocery2Amount;
        grocery3Amount = isNaN(grocery3Amount) ? 0 : grocery3Amount;


        let totalAmount = grocery1Amount + grocery2Amount + grocery3Amount
        document.getElementById('totalAmount').innerText = `The total amount is: $${totalAmount}` 
    } else {
        alert("There are no groceries in your basket")
    }
}


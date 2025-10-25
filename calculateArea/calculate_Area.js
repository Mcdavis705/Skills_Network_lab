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



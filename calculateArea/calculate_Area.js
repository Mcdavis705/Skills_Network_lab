let length;
let width;

function calculateArea() {
    if (length,width){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangle is ${area}`
    } else {
        document.getElementById("result").style.color="red"
        document.getElementById("result").innerText = 'input a valid width and length'
    }
}



// script.js
function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = parseInt(decimalInput, 10).toString(2);
    document.getElementById('binaryInput').value = binaryOutput;
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = parseInt(binaryInput, 2).toString(10);
    document.getElementById('decimalInput').value = decimalOutput;
}

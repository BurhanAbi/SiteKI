// script.js
function updateTable(character, decimal, binary) {
    const tableBody = document.getElementById('conversionTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = character;
    newRow.insertCell(1).innerText = decimal;
    newRow.insertCell(2).innerText = binary;
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = parseInt(decimalInput, 10).toString(2);
    document.getElementById('binaryInput').value = binaryOutput;

    // Tabelle aktualisieren, wenn es sich um einen gültigen ASCII-Wert handelt
    if (decimalInput >= 0 && decimalInput <= 255) {
        const character = String.fromCharCode(decimalInput);
        updateTable(character, decimalInput, binaryOutput);
    }
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = parseInt(binaryInput, 2).toString(10);
    document.getElementById('decimalInput').value = decimalOutput;

    // Tabelle aktualisieren
    if (!isNaN(decimalOutput) && decimalOutput >= 0 && decimalOutput <= 255) {
        const character = String.fromCharCode(decimalOutput);
        updateTable(character, decimalOutput, binaryInput);
    }
}

function createConversionTable(decimal) {
    // Bereite die Tabelle vor
    const tableBody = document.getElementById('conversionTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Leere vorhandene Einträge

    // Führe die Konvertierung durch und fülle die Tabelle
    let quotient = decimal;
    while (quotient !== 0) {
        let remainder = quotient % 2;
        let nextQuotient = Math.floor(quotient / 2);

        // Neue Zeile hinzufügen
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).innerText = quotient; // Linker Operand
        newRow.insertCell(1).innerText = 2; // Rechter Operand
        newRow.insertCell(2).innerText = nextQuotient; // div
        newRow.insertCell(3).innerText = remainder; // mod

        quotient = nextQuotient;
    }

    // Füge die finale Zeile hinzu, wenn das Ergebnis 0 ist
    if (decimal !== 0) {
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).innerText = 0;
        newRow.insertCell(1).innerText = "-";
        newRow.insertCell(2).innerText = "-";
        newRow.insertCell(3).innerText = "-";
    }
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = parseInt(decimalInput, 10).toString(2);
    document.getElementById('binaryInput').value = binaryOutput;

    // Erstelle die Tabelle für die Umwandlung
    createConversionTable(parseInt(decimalInput, 10));
}

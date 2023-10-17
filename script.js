document.getElementById('calculateButton').addEventListener('click', function () {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const years = parseInt(document.getElementById('years').value);
    const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;

    if (!isNaN(initialAmount) && !isNaN(years) && !isNaN(inflationRate)) {
        const finalAmount = initialAmount / Math.pow(1 + inflationRate, years);
        document.getElementById('yearsResult').textContent = years;
        document.getElementById('finalAmountResult').textContent = finalAmount.toFixed(2);
    } else {
        alert('Please enter valid numbers.');
    }
});

window.onload = function() {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetForm);

    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateFahrenheit);

    const reverseButton = document.getElementById("reverseButton");
    reverseButton.addEventListener("click", calculateCelcius);

}

function resetForm() {
    document.getElementById("celsiusValue").value = "";
    document.getElementById("fahrenheitValue").value = "";
    document.getElementById("calculationWay").value = "";
}

function calculateFahrenheit() {
    let celsiusVal = document.getElementById("celsiusValue").value;
    if (isNaN(parseFloat(celsiusVal))) {
        alert("Kolom Celsius harus diisi");
        return;
    }
    let fahrenheitVal = parseFloat(celsiusVal * 9/5) + 32;
    document.getElementById("fahrenheitValue").value = fahrenheitVal;

    document.getElementById("calculationWay").value = celsiusVal+"°C * (9/5) + 32 = "+fahrenheitVal+"°F";
}

function calculateCelcius() {
    let fahrenheitVal = document.getElementById("fahrenheitValue").value;
    if (isNaN(parseFloat(fahrenheitVal))) {
        alert("Kolom Fahrenheit harus diisi");
        return;
    }
    let celsiusVal = parseFloat(fahrenheitVal - 32) * 5/9;
    document.getElementById("celsiusValue").value = celsiusVal;

    document.getElementById("calculationWay").value = "("+fahrenheitVal+"°F - 32) * (5/9) = "+celsiusVal+"°C";
}
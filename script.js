const rates = {
    USD: { USD: 1, IDR: 16000 },
    IDR: { USD: 0.000062, IDR: 1 },
};

function convert(inputID) {
    const fromInput = document.getElementById("FromMoney");
    const toInput = document.getElementById("ToMoney");
    const fromCurrency = "IDR";
    const toCurrency = "USD";

    if (inputID === "FromMoney") {
        const value = parseFloat(fromInput.value);
        if (!isNaN(value)) {  
            const rate = rates[fromCurrency][toCurrency];
            toInput.value = (value * rate);
        } else {
            toInput.value = "";
        }
    } else if (inputID === "ToMoney") {
        const value = parseFloat(toInput.value);
        if (!isNaN(value)) {
            const rate = rates[toCurrency][fromCurrency];
            fromInput.value = (value * rate);
        } else {
            fromInput.value = "";
        }
    }
}


document.getElementById("FromMoney").addEventListener("input", () => convert("FromMoney"));
document.getElementById("ToMoney").addEventListener("input", () => convert("ToMoney"));

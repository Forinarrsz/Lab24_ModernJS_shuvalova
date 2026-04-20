const rates = {
    USD: 92.5,
    EUR: 100.2,
    GBP: 116.8
};

const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;
    const rate = rates[currency];

    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = '<span class="error">Введите корректную сумму</span>';
        return;
    }

    const convertedValue = (amount / rate).toFixed(2);

    resultDiv.innerHTML = `Результат: ${convertedValue} ${currency}`;
});

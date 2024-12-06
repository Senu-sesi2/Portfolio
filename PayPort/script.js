document.getElementById('card-number').addEventListener('input', function () {
    const cardTypeDisplay = document.getElementById('card-type');
    const number = this.value;

    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
        cardTypeDisplay.textContent = 'Visa';
    } else if (/^5[1-5][0-9]{14}$/.test(number)) {
        cardTypeDisplay.textContent = 'Mastercard';
    } else if (/^3[47][0-9]{13}$/.test(number)) {
        cardTypeDisplay.textContent = 'PayPal';
    } else {
        cardTypeDisplay.textContent = '';
    }
});


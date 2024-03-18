document.addEventListener('DOMContentLoaded', function () {
    var quantityInput = document.getElementById('quantity-input');
    var incrementButton = document.getElementById('increment');
    var decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });

    decrementButton.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});
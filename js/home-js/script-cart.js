
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các nút "minus" và "plus"
    const minusButtons = document.querySelectorAll(".quantity-left-minus");
    const plusButtons = document.querySelectorAll(".quantity-right-plus");

    // Lấy các input số lượng và giá của từng sản phẩm
    const quantityInputs = document.querySelectorAll(".item2 input");
    const itemPrices = document.querySelectorAll(".item3 .total-price");

    // Lấy phần tử hiển thị tổng giá trị
    const totalElement = document.getElementById("sum-price");
    

    // Gán sự kiện click cho các nút "minus" và "plus"
    minusButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            updateQuantity(index, -1);
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            updateQuantity(index, 1);
        });
    });

    // Hàm cập nhật số lượng và tổng giá trị
    function updateQuantity(index, change) {
        const currentQuantity = parseInt(quantityInputs[index].value);
        const newQuantity = currentQuantity + change;

        if (newQuantity >= 1 && newQuantity <= 100) {
            quantityInputs[index].value = newQuantity;
            const itemPrice = parseFloat(itemPrices[index].textContent);
            itemPrices[index].textContent = (itemPrice / currentQuantity * newQuantity).toFixed(2); // Cập nhật giá tiền theo số lượng mới
            updateTotalPrice();
        }
    }

    // Hàm cập nhật tổng giá trị
    function updateTotalPrice() {
        let totalAmount = 0;

        itemPrices.forEach((priceElement) => {
            totalAmount += parseFloat(priceElement.textContent);
        });

        totalElement.textContent = totalAmount.toFixed(2); // Làm tròn đến 2 chữ số thập phân
    }
    
});


document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử cần thiết
    const totalElement = document.getElementById("sum-price");
    const deliveryChargeElement = document.getElementById("delivery-charge");
    const payableAmountElement = document.getElementById("payable-amount");

    // Lấy giá trị ban đầu của "Total" và "Delivery Charge"
    const initialTotal = parseFloat(totalElement.textContent);
    const initialDeliveryCharge = parseFloat(deliveryChargeElement.textContent);

    // Cập nhật "Payable Amount" ban đầu
    updatePayableAmount();

    // Sự kiện cập nhật "Total"
    totalElement.addEventListener("DOMSubtreeModified", function () {
        updatePayableAmount();
    });

    // Sự kiện cập nhật "Delivery Charge"
    deliveryChargeElement.addEventListener("DOMSubtreeModified", function () {
        updatePayableAmount();
    });

    // Hàm cập nhật "Payable Amount"
    function updatePayableAmount() {
        const total = parseFloat(totalElement.textContent);
        const deliveryCharge = parseFloat(deliveryChargeElement.textContent);
        const payableAmount = total + deliveryCharge;
        payableAmountElement.textContent = payableAmount.toFixed(2);
    }
});
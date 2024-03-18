// cartService.js
angular.module('myApp').service('cartService', function () {
    var cart = [];
    var deliveryCharge = 10;

    return {
        addToCart: function (product) {
            cart.push(product);
        },
        getCart: function () {
            return cart;
        },
        getDeliveryCharge: function () {
            return deliveryCharge;
        },
        addProduct: function () {
            // Thêm một sản phẩm mới vào mảng
            const newProduct = {
                id: cart.length + 1,
                name: "Sản phẩm mới",
                price: 20.00,
                quantity: 1,
                totalPrice: 20.00,
                image: "./images/default-product-image.png",
            };

            cart.push(newProduct);
            this.updateTotalPrice();
        },
        removeProduct: function (index) {
            // Xóa một sản phẩm khỏi mảng
            cart.splice(index, 1);
            this.updateTotalPrice();
        },
        updateQuantity: function (index, change) {
            var currentQuantity = cart[index].quantity;
            var newQuantity = currentQuantity + change;

            if (newQuantity >= 1 && newQuantity <= 100) {
                cart[index].quantity = newQuantity;
                cart[index].totalPrice = (cart[index].price * newQuantity).toFixed(2);
                this.updateTotalPrice();
            }
        },
        updateTotalPrice: function () {
            this.totalAmount = cart.reduce(function (total, product) {
                return total + parseFloat(product.totalPrice);
            }, 0);

            this.payableAmount = this.totalAmount + deliveryCharge;
        },
        addProductToCart: function (product) {
            // Thêm sản phẩm vào mảng sản phẩm
            cart.push(product);
            this.updateTotalPrice();
        }
        // Các hàm khác liên quan đến giỏ hàng nếu cần
    };
});

// myApp.controller("cartController",function($scope){
//     $scope.products = [
//         { name: "Aliquam Vel", price: 30.00, quantity: 1, totalPrice: 30.00, image: "./images/profile/cart/2.png" },
//         // Thêm các sản phẩm khác ở đây
//     ];
//     $scope.deliveryCharge = 10

//     // Mã controller hiện tại của bạn
//     $scope.updateQuantity = function (index, change) {
//         var currentQuantity = $scope.products[index].quantity;
//         var newQuantity = currentQuantity + change;

//         if (newQuantity >= 1 && newQuantity <= 100) {
//             $scope.products[index].quantity = newQuantity;
//             $scope.products[index].totalPrice = ($scope.products[index].price * newQuantity).toFixed(2);
//             $scope.updateTotalPrice();
//         }
//     };

//     $scope.updateTotalPrice = function () {
//         $scope.totalAmount = 0;

//         angular.forEach($scope.products, function (product) {
//             $scope.totalAmount += parseFloat(product.totalPrice);
//         });

//         $scope.payableAmount = $scope.totalAmount + $scope.deliveryCharge;
//     };
// })
myApp.controller("cartController", function ($scope,cartService) {
    // $scope.products = [
    //     { id: 1, name: "Aliquam Vel", price: 30.00, quantity: 1, totalPrice: 30.00, image: "./images/profile/cart/2.png" },
    //     // Thêm các sản phẩm khác ở đây
    // ];
    $scope.products = cartService.getCart();
    $scope.deliveryCharge = cartService.getDeliveryCharge();
    $scope.addProduct = cartService.addProduct;
    $scope.removeProduct = cartService.removeProduct;
    $scope.updateQuantity = cartService.updateQuantity;
    $scope.updateTotalPrice = cartService.updateTotalPrice;
    $scope.addProductToCart = cartService.addProductToCart;
});


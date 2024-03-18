myApp.controller("paymentController", function ($scope, $http, $window) {
    $scope.hoadon = {
        id: "",
        fisrtName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    }
    $scope.formHopLe = true;
    $scope.formThongBao = "";
    $scope.addHoaDon = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.hoadon.fisrtName === ""||$scope.hoadon.lastName === ""||$scope.hoadon.email === ""||$scope.hoadon.phone === ""||$scope.hoadon.address === ""){
            $scope.formHopLe = false;
            $scope.formThongBao = "Payment failed, please enter complete information!";
            return;
        }
        $http({
            url:" http://localhost:3000/hoadon",
            method: "POST",
            data: $scope.hoadon
        }).then(function(response){
            alert("Successfully!");
            $window.location.href ="http://127.0.0.1:5501/index.html#!/"
        })
    }
})
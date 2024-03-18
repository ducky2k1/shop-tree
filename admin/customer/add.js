myApp.controller("addCustomerController",function($scope,$http,$window){
    $scope.danhSach = {
        name: "",
        email: "",
        password:""
    }
    $scope.formHopLe = true;
    $scope.formThongBao = "";

    $scope.add = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.danhSach.name === "" || $scope.danhSach.email === "" || $scope.danhSach.password === ""){
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin."
            return;
        }
        $http({
            method: "POST",
            url: "http://localhost:3000/user",
            data: $scope.danhSach
        }).then(function(response){
            alert("Tạo mới thành công.");
            $window.location.href="#!customer";
        })
    }
})
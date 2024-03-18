myApp.controller("adddanhMucController",function($scope,$http,$window){
    $scope.danhMuc = {
        ten: ""
    }
    $scope.formHopLe = true;
    $scope.formThongBao = "";

    $scope.add = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.danhMuc.ten === ""){
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin."
            return;
        }
        $http({
            method: "POST",
            url: "http://localhost:3000/danhmuc",
            data: $scope.danhMuc
        }).then(function(response){
            alert("Tạo mới thành công.");
            $window.location.href="#!danh-muc";
        })
    }
})
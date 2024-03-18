myApp.controller("editProductController",function($scope,$http,$window,$routeParams){
    
    $scope.danhSach = {}
    $scope.formHopLe = true;
    $scope.formThongBao = "";
    $http.get("http://localhost:3000/sanpham/"+$routeParams.id).then(function(response){
        $scope.danhSach = response.data;

    })
    $http.get("http://localhost:3000/danhmuc/"+$routeParams.idDM).then(function (response) {
        $scope.danhMuc = response.data;
        console.log($scope.danhMuc.ten);
    });
    $scope.edit = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.danhSach.name === ""){
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin."
            return;
        }
        $http({
            method: "PUT",
            url: "http://localhost:3000/danhmuc/" + $scope.danhMuc.id ,
            data: $scope.danhMuc
        }).then(function(){
            alert("Chỉnh sửa thành công.")
            $window.location.href="#!danh-muc"
        })
    }

})
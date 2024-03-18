myApp.controller("editDonHangController",function($scope,$http,$window,$routeParams){
    $scope.danhSach = {}
    $scope.formHopLe = true;
    $scope.formThongBao = "";
    $http.get("http://localhost:3000/hoadon/"+$routeParams.id).then(function(response){
        $scope.danhSach = response.data
        console.log($scope.danhSach );
    })
    $scope.edit = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if(!$scope.danhSach.fisrtName||!$scope.danhSach.lastName||!$scope.danhSach.email||!$scope.danhSach.phone||!$scope.danhSach.address){
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin."
            return;
        }
        $http({
            method: "PUT",
            url: "http://localhost:3000/hoadon/" + $scope.danhSach.id ,
            data: $scope.danhSach
        }).then(function(){
            alert("Chỉnh sửa thành công.")
            $window.location.href="#!donHang"
        })
    }

})
myApp.controller("editCustomerController",function($scope,$http,$window,$routeParams){
    $scope.danhSach = {}
    $scope.formHopLe = true;
    $scope.formThongBao = "";
    $http.get("http://localhost:3000/user/"+$routeParams.id).then(function(response){
        $scope.danhSach = response.data
    })
    $scope.edit = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.danhSach.name === "" || $scope.danhSach.email === "" || $scope.danhSach.password === ""){
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin."
            return;
        }
        $http({
            method: "PUT",
            url: "http://localhost:3000/user/" + $scope.danhSach.id ,
            data: $scope.danhSach
        }).then(function(){
            alert("Chỉnh sửa thành công.")
            $window.location.href="#!customer"
        })
    }

})
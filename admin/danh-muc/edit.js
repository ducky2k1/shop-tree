myApp.controller("editdanhMucController",function($scope,$http,$window,$routeParams){
    $scope.danhMuc = {}
    $scope.formHopLe = true;
    $scope.formThongBao = "";
    $http.get("http://localhost:3000/danhmuc/"+$routeParams.id).then(function(response){
        $scope.danhMuc = response.data
    })
    $scope.edit = function(){
        $scope.formHopLe = true;
        $scope.formThongBao = "";
        if($scope.danhMuc.ten === ""){
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
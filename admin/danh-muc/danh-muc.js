myApp.controller("danhMucController",function($scope,$http,$window){
    $http.get("http://localhost:3000/danhmuc").then(function(response){
        $scope.danhMuc = response.data
    })
    $scope.delete = function(id){
        //call api update data
        $http({
            method: "DELETE",
            url: "http://localhost:3000/danhmuc/" + id ,
            data: $scope.danhMuc
        }).then(function(response){
            alert("Xóa thành công")
            $window.location.href="#!danh-muc";
        })
    }
})
myApp.controller("productController",function($scope,$http,$window){
    $http.get("http://localhost:3000/sanpham").then(function(response){
        $scope.danhSach = response.data
    })
    $scope.delete = function(id){
        //call api update data
        if(confirm("Bạn có chắc xóa không?")){
            $http({
                method: "DELETE",
                url: "http://localhost:3000/sanpham/" + id ,
                data: $scope.danhSach
            }).then(function(response){
                alert("Xóa thành công")
                $window.location.href="#!product";
            })
        }

    }
})
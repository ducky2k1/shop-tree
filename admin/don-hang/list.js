myApp.controller("donHangController",function($scope,$http,$window){
    $http.get("http://localhost:3000/hoadon").then(function(response){
        $scope.danhSach = response.data
        console.log($scope.danhSach);
    })
    $scope.delete = function(id){
        //call api update data
        if(confirm("Bạn có chắc xóa?")){
            $http({
                method: "DELETE",
                url: "http://localhost:3000/hoadon/" + id ,
                data: $scope.danhSach
            }).then(function(response){
                alert("Xóa thành công")
                $window.location.href="#!donHang";
            })
        }

    }
})
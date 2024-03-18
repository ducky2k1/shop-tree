myApp.controller("listCustomerController",function($scope,$http,$window){
    $http.get("http://localhost:3000/user").then(function(response){
        $scope.danhSach = response.data
    })
    $scope.delete = function(id){
        //call api update data
        if(confirm("Bạn có chắc muốn xóa không?")){
            $http({
                method: "DELETE",
                url: "http://localhost:3000/user/" + id ,
                data: $scope.sanPham
            }).then(function(response){
                alert("Xóa thành công")
                $window.location.href="#!customer";
            })
        }

    }
})
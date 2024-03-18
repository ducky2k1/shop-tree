myApp.controller("detailController",function($routeParams,$scope,$http){
    $scope.sanPham = {}
    $http.get("http://localhost:3000/sanpham/" + $routeParams.id).then(function(response){
        $scope.sanPham = response.data;
    })
    $http.get("http://localhost:3000/danhmuc/" + $routeParams.id).then(function(response){
        $scope.danhMuc = response.data;
    })
    console.log($routeParams);
})
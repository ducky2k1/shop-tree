myApp.controller("addProductController", function ($scope, $http, $window) {
    $http.get("http://localhost:3000/danhmuc").then(function (response) {
        $scope.danhMuc = response.data;
    });

    $scope.danhSach = {
        name: "",
        price: "",
        sale: "",
        image: null,
        idDanhMuc: "",
        luotMua: ""
    };

    $scope.formHopLe = true;
    $scope.formThongBao = "";
    
    

    $scope.add = function () {
        console.log($scope.danhSach);
        console.log($scope.danhSach.image);
        $scope.formHopLe = true;
        $scope.formThongBao = "";

        if (!$scope.danhSach.name || !$scope.danhSach.price || !$scope.danhSach.sale || !$scope.danhSach.image || !$scope.danhSach.idDanhMuc) {
            $scope.formHopLe = false;
            $scope.formThongBao = "Yêu cầu quý khách nhập đầy đủ trường thông tin.";
            return;
        }

        $http({
            method: "POST",
            url: "http://localhost:3000/sanpham",
            data: $scope.danhSach
        }).then(function (response) {
            alert("Tạo mới thành công.");
            $window.location.href = "#!product";
        });
    };
    
});

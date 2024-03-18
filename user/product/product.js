myApp.controller("productController", function ($scope, $http) {
    $scope.minVal = 0;  // Set initial min value
    $scope.maxVal = 100;  // Set initial max value

    // Update the progress bar and input values when the range input changes
    $scope.updateValues = function () {
        $scope.progressWidth = $scope.maxVal - $scope.minVal + "%";
    };

    // Watch for changes in min and max values
    $scope.$watchGroup(['minVal', 'maxVal'], function (newValues, oldValues) {
        $scope.updateValues();
    });

    // Initial call to set values and progress bar width
    $scope.updateValues();


    $http.get("http://localhost:3000/sanpham?_start=0&_end=6").then(function(response){
        $scope.danhSach = response.data
        console.log($scope.danhSach);
    })
    $http.get("http://localhost:3000/danhmuc").then(function(response){
        $scope.danhMuc = response.data
    })
    $scope.next = function(){
        $http.get("http://localhost:3000/sanpham?_start=6&_end=12").then(function(response){
            $scope.danhSach = response.data
            console.log($scope.danhSach);
        })
    }
    $scope.third = function(){
        $http.get("http://localhost:3000/sanpham?_start=12&_end=20").then(function(response){
            $scope.danhSach = response.data
            console.log($scope.danhSach);
        })
    }
    $scope.pre = function(){
        $http.get("http://localhost:3000/sanpham?_start=0&_end=6").then(function(response){
            $scope.danhSach = response.data
            console.log($scope.danhSach);
        })
    }
    $scope.fil = function(id){
        $http.get("http://localhost:3000/sanpham?idDanhMuc="+id).then(function(response){
            $scope.danhSach = response.data
            console.log($scope.danhSach);
        })
    }
    $scope.all = function(){
        $http.get("http://localhost:3000/sanpham?_start=0&_end=6").then(function(response){
            $scope.danhSach = response.data
            console.log($scope.danhSach);
        })
    }
})
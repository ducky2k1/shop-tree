myApp.controller("registController",function($scope,$http,$window){
    // code logic
            // 1.khởi tạo biến cần thiết
            $scope.user = {
                email: "",
                password: "",
                name: ""
            }
            $scope.formHopLe = true;
            $scope.formThongBao = "";
            $scope.rePass = "";

            //Sử dụng các biến cần thiết vào html

            // 2.Khai báo function bắt sự kiện submit form
            $scope.dangKy = function(){
                //Bắt đầu validate
                // reser biến
                console.log($scope.user);
                console.log($scope.rePass);
                $scope.formHopLe = true;
                $scope.formThongBao = "";
                //validate bắt buộc nhập
                if($scope.user.email === "" || $scope.user.password === "" || $scope.rePass === "" || $scope.user.name === ""){
                    $scope.formHopLe = false;
                    $scope.formThongBao = "Đăng ký không hợp lệ vui lòng nhập đủ thông tin";
                    return;
                }
                if($scope.user.password !== $scope.rePass){
                    $scope.formHopLe = false;
                    $scope.formThongBao = "Password and rePass not similar";
                    return;
                }



                // 3. xử lý khi form hợp lệ
                // lưu thông tin vào db
                // check database.json khởi tạo user chưa
                // chạy json-server
                // Dùng http phương thức post
                //khai báo $http ở controller
                $http({
                    url:" http://localhost:3000/user",
                    method: "POST",
                    data: $scope.user
                }).then(function(response){
                    $window.location.href ="http://127.0.0.1:5501/index.html#!/login"
                })

            }
})
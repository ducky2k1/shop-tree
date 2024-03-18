myApp.controller("loginController",function($scope,$http,$window){
                // code logic
            // 1.khởi tạo biến cần thiết
            $scope.user = {
                email: "",
                password: ""
            }
            $scope.formHopLe = true;
            $scope.formThongBao = "";
            
            //khởi tạo hàm dangNhap()
            //validate
            $scope.dangNhap = function(){
                if($scope.user.email === "" || $scope.user.password === ""){
                    $scope.formHopLe = false;
                    $scope.formThongBao = "Đăng nhập không thành công vui lòng nhập đủ thông tin";
                    return;
                }
                            //Xử lý logic sau khi form hơp lệ
                //phương án giải quyết
                // check user pass với db
                // trùng -> pass
                // k trùng -> lỗi
                $http({
                    url:" http://localhost:3000/user",
                    method: "GET",
                    params: $scope.user
                }).then(function(response){
                    console.log(response.data);

                    // 1. không có dữ liệu trên db
                    if(response.data.length === 0){
                        $scope.formHopLe = false;
                        $scope.formThongBao = "Đăng nhập không thành công! Email or password không có!";
                    } else{
                        //nếu có data
                        //1. lưu thông tin vào session
                        sessionStorage.setItem("user",$scope.user.email);
                        //2. Điều về trang chủ
                        $window.location.href="/index.html";
                    }
                })
            }
})
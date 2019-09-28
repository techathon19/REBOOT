var app = angular.module('App', []);
app.controller('myCtrl', function($scope,$http) {
   
    $http.get("/user/userdetail").then(function (response) {  
        //console.log("Fetching user details");
        $scope.name = response.data[0];
       // console.log($scope.machines);
        
    }); 
});
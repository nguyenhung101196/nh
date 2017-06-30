
var app = angular.module("ngApp", ["ngRoute"]);


app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/header_1",{templateUrl:"/web/html/header_1.html"})
    .when("/header_2",{templateUrl:"/web/html/header_2.html"})
   
    
    
}]);



function b(){
    products();
}
app.controller("myCtrl",['$scope',function myCtrl($scope){
$scope.name="nguyenhung";
}]);

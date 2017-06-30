var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("\header_1",{templateUrl:"header_1.html"})
    .when("\header_2",{templateUrl:"header_2.html"});
});
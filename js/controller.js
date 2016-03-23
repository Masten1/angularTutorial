/**
 * Created by Andrey on 23.03.2016.
 */

var model = "Hello World";

var helloWorldApp = angular.module("helloWorldApp", []);

helloWorldApp.controller("HelloWorldCtrl", function($scope){
    $scope.message = model;

    $scope.clickHandler = function() {
        $scope.message = $scope.text;
    }
});
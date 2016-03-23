/**
 * Created by Andrey on 23.03.2016.
 */
var model = {
    user: "User1",
    courses: [
        {name: "Courses 1", passed: true},
        {name: "Courses 2", passed: true},
        {name: "Courses 3", passed: true},
        {name: "Courses 4", passed: true},
        {name: "Courses 5", passed: true}
    ]
};

var courseListApp = angular.module("courseListApp", []);

courseListApp.controller("CourseListCtrl", function($scope){
   $scope.list = model;
});
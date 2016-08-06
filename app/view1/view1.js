'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

      $scope.list1 = [];
      $scope.list2 = [];

        $scope.availableFlags = [ "flower", "star", "mood", "flash" ];

        var flagsGenerator = function () {
            var arr = [];

            for (var i = 0; i < $scope.availableFlags.length; i++){
                if (Math.floor(Math.random() * 2)){
                    arr.push($scope.availableFlags[i]);
                }
            }

            return arr;
        };

        $scope.$on('aplyFilterFlag', function (event, data) {
            $scope.searchFlag = data;
        });


        $scope.moveFromList = function (item, list) {
            var trueIndex = list.indexOf(item);
            list.splice(trueIndex, 1);
        };

        //нагенерить списки
      for (var i = 0; i<100; i++){
        $scope.list1.push({
          name: 'name' + i,
          flags: flagsGenerator()
        });

        $scope.list2.push({
          name: 'name' + i,
            flags: flagsGenerator()
        });
      }

      $scope.applySelected = function (item) {
        $scope.selected = item;
      };

        $scope.$watch('list1', function (newValue, oldValue) {
            //console.log($scope.list1);
        }, true);


    }]);
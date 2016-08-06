angular.module('myApp')

.directive('flagsIcons', function () {
    return {
        restrict: 'E',
        scope: {
            flags: "=",
            list: "=",
            searchFlag: "="
        },
        template:   '<span ng-repeat="flag in flags track by $index"' +
                                    'ng-click=applyFlag(flag) ' +
                                    ' class="m5" >' +
                        '<span ng-switch="flag">' +

                            '<md-icon ng-switch-when="flower">' +
                                '<i class="material-icons">filter_vintage</i>' +
                            '</md-icon>' +

                            '<md-icon ng-switch-when="star">' +
                                '<i class="material-icons">stars</i>' +
                            '</md-icon>' +

                            '<md-icon ng-switch-when="mood">' +
                                '<i class="material-icons">mood</i>' +
                            '</md-icon>' +

                            '<md-icon ng-switch-when="flash">' +
                                '<i class="material-icons">flash_on</i>' +
                            '</md-icon>' +

                            '<md-icon ng-switch-default>' +
                                ' unknown key ' +
                            '</md-icon>' +

                        '</span>' +
                    '</span>',
        link: function (scope) {

            scope.applyFlag = function (flag) {
                scope.$emit('aplyFilterFlag', flag);
            };

            //console.log(scope.list);
            scope.filterIcons = function (flag) {
                console.log(flag);
                var newlist = scope.list.filter(function (obj) {
                    //console.log(obj.flags.indexOf(flag));
                    return (obj.flags.indexOf(flag) != -1);
                });
                console.log(newlist);
                scope.list = newlist;
            }
        }
    }
});
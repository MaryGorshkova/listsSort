angular.module('myApp')

.filter('flagFilter', function () {
        return function (list, flag) {

            if (flag){

                var newList = [];

                angular.forEach(list, function (item) {
                    if (item.flags.indexOf(flag) != -1){
                        newList.push(item);
                    }
                });

                return newList;
            }

            else{
                return list;
            }
        }
    })

.filter('sortDirection', function () {
    return function (list, isDescending) {
        var newList = list.slice(0);
        if (isDescending){
            return newList.sort(function (a, b) {
                return a.name > b.name ? -1 : 1;
            });
        }
        else{
            return newList.sort(function (a, b) {
                return a.name < b.name ? -1 : 1;
            });
        }
    }
});
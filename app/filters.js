
angular.module('callibrity.filters', [])
    .filter('csnumber', ['$filter', function ($filter) {
    return function (number) {
        return $filter('number')(number, 5);
    }
}]);


angular.module('sourcemain.filters', [])
    .filter('csnumber', ['$filter', function ($filter) {
        return function (number) {
            return $filter('number')(number, 2);
        }
    }]);
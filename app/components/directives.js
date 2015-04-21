angular.module('myApp').directive('actor', function () {
    return {
        restrict: 'E',
        template: '<div>' +
        '<button ng-click="showRoles()" class="btn btn-sm btn-default">show/hide</button>' +
        '{{actor.name}} :&nbsp;'+
        '<ul><li ng-repeat="role in actor.characters" ng-show="showTheRoles">' +
        '{{role}}' +
        '<span ng-hide="{{$last}}">,&nbsp;</span>' +
        '</li></ul>' +
        '</div>',
        controller: function ($scope) {
            $scope.showTheRoles = false;

            $scope.showRoles = function () {
                $scope.showTheRoles = !$scope.showTheRoles;
            }
        }
    }

});
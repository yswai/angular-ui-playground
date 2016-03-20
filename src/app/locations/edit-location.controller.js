(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$routeParams', '$location', 'locations'];

    function EditTeamCtrl($routeParams, $location, locations) {

        var vm = this;
        vm.location = $routeParams.id;
        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        vm.ok = saveLocation;
        vm.cancel = cancel;

        function saveLocation () {
            console.log('save location');
        }

        function cancel () {
            $location.path('/locations');
        }

    }

})();
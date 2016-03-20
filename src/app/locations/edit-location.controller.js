(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$routeParams', 'locations'];

    function EditTeamCtrl($routeParams, locations) {

        var vm = this;
        vm.location = $routeParams.id;
        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    }

})();
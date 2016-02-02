(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$uibModalInstance', 'properties', 'location', 'uiGmapGoogleMapApi'];

    function EditTeamCtrl($uibModalInstance, properties, location, uiGmapGoogleMapApi) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.location = location;
        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps);
        });

        function ok() {
            $uibModalInstance.close(vm.location);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

    };

})();
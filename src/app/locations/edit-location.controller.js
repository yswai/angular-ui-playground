(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$uibModalInstance', 'properties', 'location'];

    function EditTeamCtrl($uibModalInstance, properties, location) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.location = location;
        vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        function ok() {
            $uibModalInstance.close(vm.location);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

    };

})();
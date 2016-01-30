(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditTeamCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$uibModalInstance', 'properties', 'team'];

    function EditTeamCtrl($uibModalInstance, properties, team) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.team = team;

        function ok() {
            $uibModalInstance.close(vm.team);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

    };

})();
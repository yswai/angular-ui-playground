(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditTeamCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$uibModalInstance', 'properties', 'team', 'divisions'];

    function EditTeamCtrl($uibModalInstance, properties, team, divisions) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.team = team;
        vm.divisions = divisions;

        function ok() {
            $uibModalInstance.close(vm.team);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

    };

})();
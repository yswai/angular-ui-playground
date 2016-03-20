(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditTeamCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$modalInstance', 'properties', 'team', 'divisions'];

    function EditTeamCtrl($modalInstance, properties, team, divisions) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.team = team;
        vm.divisions = divisions;

        function ok() {
            $modalInstance.close(vm.team);
        };

        function cancel() {
            $modalInstance.dismiss();
        };

    };

})();
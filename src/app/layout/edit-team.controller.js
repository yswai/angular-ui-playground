(function () {
    'use strict';

    angular.module('eliteAdmin').controller('DeleteConfirmCtrl', DeleteConfirmCtrl);

    DeleteConfirmCtrl.$inject = ['$uibModalInstance', 'properties'];

    function DeleteConfirmCtrl($uibModalInstance, properties) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;

        function ok() {
            $uibModalInstance.close(true);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

    };

})();
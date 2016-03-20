(function () {
    'use strict';

    angular.module('eliteAdmin').controller('DeleteConfirmCtrl', DeleteConfirmCtrl);

    DeleteConfirmCtrl.$inject = ['$modalInstance', 'properties'];

    function DeleteConfirmCtrl($modalInstance, properties) {
        var vm = this;
        vm.properties = properties;
        vm.ok = ok;
        vm.cancel = cancel;

        function ok() {
            $modalInstance.close(true);
        }

        function cancel() {
            $modalInstance.dismiss();
        }

    };

})();
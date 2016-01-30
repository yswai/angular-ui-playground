(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditGameCtrl', EditGameCtrl);

    EditGameCtrl.$inject = ['$uibModalInstance', 'properties', 'game', 'locations', 'teams'];

    function EditGameCtrl($uibModalInstance, properties, game, locations, teams) {
        var vm = this;
        vm.properties = properties;
        vm.popupOpened - false;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.game = game;
        vm.locations = locations;
        vm.teams = teams;

        function ok() {
            vm.game.time = combineDate();
            delete vm.game.date;
            $uibModalInstance.close(vm.game);
        };

        function cancel() {
            $uibModalInstance.dismiss();
        };

        function combineDate() {
            return moment(new Date(moment(new Date(vm.game.date)).format('YYYY-MM-DD')
                    + ' '+ moment(new Date(vm.game.time)).format('hh:mm')))
                .format('YYYY-MM-DDThh:mm:ss');
        }

    };

})();
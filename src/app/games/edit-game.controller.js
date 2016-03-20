(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditGameCtrl', EditGameCtrl);

    EditGameCtrl.$inject = ['$modalInstance', 'properties', 'game', 'locations', 'teams'];

    function EditGameCtrl($modalInstance, properties, game, locations, teams) {
        var vm = this;
        vm.properties = properties;
        vm.popupOpened - false;
        vm.ok = ok;
        vm.cancel = cancel;
        vm.game = game;
        vm.locations = locations;
        vm.teams = teams;

        var uiDate = vm.game.time ? new Date(vm.game.time) : new Date();
        vm.game.date = uiDate;
        vm.game.time = uiDate;
        vm.game.id = vm.game.id || _.uniqueId('game_');

        function ok() {
            vm.game.time = combineDate();
            delete vm.game.date;
            $modalInstance.close(vm.game);
        };

        function cancel() {
            $modalInstance.dismiss();
        };

        function combineDate() {
            return moment(new Date(moment(new Date(vm.game.date)).format('YYYY-MM-DD')
                    + ' '+ moment(new Date(vm.game.time)).format('hh:mm')))
                .format('YYYY-MM-DDThh:mm:ss');
        }

    };

})();
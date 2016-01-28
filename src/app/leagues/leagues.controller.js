(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeaguesCtrl', LeaguesCtrl);

    LeaguesCtrl.$inject = ['initialData'];

    function LeaguesCtrl(initialData) {
        /* jshint validthis:true */
        var vm = this;
        vm.newLeagueName = '';

        vm.leagues = initialData;
        vm.currentEdit = {};
        vm.editItem = editItem;
        vm.saveItem = saveItem;
        vm.cancelEdit = cancelEdit;
        vm.deleteItem = deleteItem;
        vm.addItem = addItem;
        vm.itemToEdit = {};

        function addItem () {
            vm.leagues.push({
                "id": getId(),
                "name": vm.newLeagueName,
                "homeScreen": "**Welcome coaches, players, and parents!** " +
                "\n\nThis site contains full schedule information for the tournament.",
                "rulesScreen": ""
            });

            vm.newLeagueName = null;
        }

        function editItem (item) {
            vm.currentEdit[item.id] = angular.copy(item);
        }

        function saveItem (id) {
            _.each(vm.leagues, function(league) {
                if (league.id === id) {
                    league.name = vm.currentEdit[league.id].name;
                }
            });
            delete vm.currentEdit[id];
        }

        function cancelEdit (id) {
            delete vm.currentEdit[id];
        }

        function deleteItem (id) {
            vm.leagues = _.reject(vm.leagues, { id: id})
        }

        function getId() {
            return (_.max(_.map(vm.leagues, 'id')) + 1 ) || 1;
        }

    }

})();

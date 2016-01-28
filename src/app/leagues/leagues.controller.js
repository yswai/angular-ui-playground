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
            vm.currentEdit = angular.copy(item);
        }

        function saveItem (item) {
            _.each(vm.leagues, function(league) {
                if (league.id === id) {
                    league = item;
                }
            });
        }

        function cancelEdit () {
            vm.currentEdit = {};
        }

        function deleteItem (id) {
            vm.leagues = _.reject(vm.leagues, { id: id})
        }

        function getId() {
            return (_.max(_.map(initialData, 'id')) + 1 ) || 1;
        }

    }

})();

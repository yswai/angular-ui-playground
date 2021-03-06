(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeaguesCtrl', LeaguesCtrl);

    LeaguesCtrl.$inject = ['initialData', '$modal'];

    function LeaguesCtrl(initialData, $modal) {
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
        vm.showHelpAlert = true;
        vm.hideAlert = hideAlert;

        function addItem () {
            if (_.isEmpty(vm.newLeagueName)) return;
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

        function deleteItem (league) {
            var modalInstance = $modal.open({
                size: 'md',
                templateUrl: 'app/leagues/delete-confirm.html',
                controller: 'DeleteConfirmCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: function () {
                        return {
                            title: 'Delete confirmation',
                            message: 'Are you sure you want to delete league "' + league.name + '"?',
                            button: ['Ok', 'Cancel']
                        }
                    }
                }
            });
            modalInstance.result.then(function(isDelete) {
                if (!isDelete) return;
                vm.leagues = _.reject(vm.leagues, { id: league.id});
            }, function() {

            });
        }

        function getId() {
            return (_.max(_.map(vm.leagues, 'id')) + 1 ) || 1;
        }

        function hideAlert() {
            vm.showHelpAlert = false;
        }

    }

})();

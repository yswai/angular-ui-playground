(function () {
    'use strict';

    angular.module('eliteAdmin').controller('TeamsCtrl', TeamsCtrl);

    TeamsCtrl.$inject = ['$q', '$modal', '$routeParams', 'initialData'];

    /* @ngInject */
    function TeamsCtrl($q, $modal, $routeParams, initialData) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.deleteItem = deleteItem;
        vm.editItem = editItem;
        vm.teams = initialData;
        vm.showImport = showImport;
        vm.toggleExpand = toggleExpand;
        vm.accordionExpanded = true;

        activate();

        ////////////////

        function activate() {
            initializeGroups();
        }

        function deleteItem(id) {
            dialogs.confirm('Are you sure you want to Delete this item?', 'Delete?', ['OK', 'Cancel'])
                .then(function(){
                    eliteApi.deleteTeam(id).then(function(data){
                        _.remove(vm.teams, { 'id': id });
                        initializeGroups();
                    });
                });
        }

        function editItem(team){
            var modalInstance = $modal.open({
                templateUrl: '/app/teams/edit-team.html',
                controller: 'EditTeamCtrl',
                controllerAs: 'vm',
                resolve: {
                    data: function() {
                        return {
                            divisions: _.chain(vm.teams).uniq('divisionName').map('divisionName').value(),
                            itemToEdit: team
                        };
                    }
                }
            });

            modalInstance.result.then(function(result){
                result.leagueId = $stateParams.id;
                eliteApi.saveTeam(result).then(function(data){
                    if (team){
                        _.assign(team, data);
                    } else{
                        vm.teams.push(data);
                    }
                    initializeGroups();
                });
            });
        }

        function initializeGroups() {
            vm.groups = _.chain(vm.teams)
                .sortBy('name')
                .groupBy('divisionName')
                .pairs()
                .map(function(item){
                    return { divisionName: item[0], teams: item[1], isOpen: true };
                })
                .sortBy('divisionName')
                .value();
        }

        function showImport() {
            var modalInstance = $modal.open({
                templateUrl: '/app/teams/import-teams.html',
                controller: 'ImportTeamsCtrl',
                controllerAs: 'vm',
                size: 'lg'
            });

            modalInstance.result.then(function (newTeams) {
                var promises = [];

                _.forEach(newTeams, function (team) {
                    var deferred = $q.defer();
                    promises.push(deferred.promise);

                    team.leagueId = $stateParams.leagueId;

                    eliteApi.saveTeam(team).then(function (data) {
                        vm.teams.push(data);
                        deferred.resolve();
                    });
                });

                $q.all(promises).then(function () {
                    initializeGroups();
                });
            });
        }

        function toggleExpand(expand){
            _.forEach(vm.groups, function(group){
                group.isOpen = expand;
            });
        }
    }
})();
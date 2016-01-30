(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeagueShellCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$uibModal', '$routeParams', 'initialData', '$location'];

    function LeagueShellCtrl($uibModal, $routeParams, initialData, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams', active: true },
            { text: 'Games', state: 'games' },
            { text: 'League Home', state: 'location'},
            { text: 'Games Calendar', state: 'games-calendar' }
        ];
        vm.toggleCollapseAll = toggleCollapseAll;
        vm.collapseAll = false;
        vm.groupedTeams = [];
        vm.teams = initialData;
        vm.go = go;
        vm.addNewTeam = addNewTeam;
        vm.editTeam = editTeam;
        vm.deleteTeam = deleteTeam;

        activate();

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function activate() {
            _.first(vm.tabs).active = true;
            initializeGroup();
            vm.toggleCollapseAll(false);
        }

        function initializeGroup() {
            var openedGroups = [];
            _.each(vm.groupedTeams, function(group) {
                if (group.isOpen) openedGroups.push(group.groupName);
            });
            vm.groupedTeams = _.chain(vm.teams)
                .filter(function(t) {
                    return t.leagueId === parseInt($routeParams.leagueId);
                })
                .groupBy('divisionName')
                .map(function(teams, groupName) {
                    return {
                        groupName: groupName,
                        isOpen: _.contains(openedGroups, groupName),
                        teams: teams
                    };
                }).value();
        }

        function toggleCollapseAll(isCollapsed) {
            _.each(vm.groupedTeams, function(league) {
                league.isOpen = !isCollapsed;
            });
        }

        function addNewTeam() {
            var modal = $uibModal.open({
                templateUrl: 'app/layout/edit-team.html',
                controller: 'EditTeamCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: {
                        title: 'Add new team',
                        button: [
                            'Save', 'Cancel'
                        ]
                    },
                    divisions: function() {
                        return _.uniq(_.map(vm.groupedTeams, 'groupName'));
                    },
                    team: function() { }
                }
            });
            modal.result.then(function(newTeam) {
                newTeam.leagueId = parseInt($routeParams.leagueId);
                newTeam.id = _.uniqueId('team_');
                vm.teams.push(newTeam);
                initializeGroup();
            });
        }

        function editTeam(team) {
            var modal = $uibModal.open({
                templateUrl: 'app/layout/edit-team.html',
                controller: 'EditTeamCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: {
                        title: 'Edit team "' + team.name + '"',
                        button: [
                            'Save', 'Cancel'
                        ]
                    },
                    divisions: function() {
                        return _.uniq(_.map(vm.groupedTeams, 'groupName'));
                    },
                    team: function() {
                        return angular.copy(team);
                    }
                }
            });
            modal.result.then(function(editedTeam) {
                _.each(vm.teams, function(team) {
                    if (team.id === editedTeam.id) {
                        _.assign(team, editedTeam);
                    }
                });
                initializeGroup();
            });
        }

        function deleteTeam(team) {
            var modal = $uibModal.open({
                templateUrl: 'app/leagues/delete-confirm.html',
                controller: 'DeleteConfirmCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: {
                        title: 'Delete confirmation',
                        message: 'Are you sure you want to delete team "' + team.name + '"?',
                        button: [
                            'Ok', 'Cancel'
                        ]
                    }
                }
            });
            modal.result.then(function() {
                _.remove(vm.teams, { id: team.id });
                initializeGroup();
            });
        }

    }
})();
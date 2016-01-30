(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeagueShellCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$routeParams', 'initialData', '$location'];

    function LeagueShellCtrl($routeParams, initialData, $location) {
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
        vm.groupedTeams = {};
        vm.teams = initialData;
        vm.go = go;

        activate();

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function activate() {
            _.first(vm.tabs).active = true;
            vm.groupedTeams = _.chain(vm.teams)
                .filter(function(t) {
                    return t.leagueId === parseInt($routeParams.leagueId);
                })
                .groupBy('divisionName')
                .map(function(v, k) {
                    return {
                        groupName: k,
                        isOpen: false,
                        teams: v
                    };
                }).value();
            _.first(vm.groupedTeams).isOpen = true;
        }

        function toggleCollapseAll(isCollapsed) {
            _.each(vm.groupedTeams, function(league) {
                league.isOpen = !isCollapsed;
            });
        }

    }
})();
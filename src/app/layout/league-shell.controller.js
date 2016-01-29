(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeagueShellCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$routeParams', 'initialData'];

    function LeagueShellCtrl($routeParams, initialData) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'league.teams' },
            { text: 'Games', state: 'league.games' },
            { text: 'Games Calendar', state: 'league.games-calendar' }
        ];
        vm.groupedTeams = {};
        vm.teams = initialData;

        activate();

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
                        isOpen: true,
                        teams: v
                    };
                }).value();
        }
    }
})();
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
                .map(function(v, k, idx) {
                    return {
                        groupName: k,
                        isOpen: false,
                        teams: v
                    };
                }).value();
            _.first(vm.groupedTeams).isOpen = true;
        }

    }
})();
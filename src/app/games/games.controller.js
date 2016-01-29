(function () {
    'use strict';

    angular.module('eliteAdmin').controller('GamesCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$routeParams', 'initialData', '$location'];

    function LeagueShellCtrl($routeParams, initialData, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams' },
            { text: 'Games', state: 'games', active: true },
            { text: 'League Home', state: 'location'},
            { text: 'Games Calendar', state: 'games-calendar' }
        ];
        vm.groupedTeams = {};
        vm.games = initialData;
        vm.go = go;

        activate();

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function activate() {

        }
    }
})();
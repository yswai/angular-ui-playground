(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LocationCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$routeParams', '$location'];

    function LeagueShellCtrl($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams' },
            { text: 'Games', state: 'games'},
            { text: 'League Home', state: 'location', active: true },
            { text: 'Games Calendar', state: 'games-calendar' }
        ];
        vm.groupedTeams = {};
        vm.go = go;

        activate();

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function activate() {

        }
    }
})();
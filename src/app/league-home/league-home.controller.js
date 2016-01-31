(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeagueHomeCtrl', LeagueHomeCtrl);

    LeagueHomeCtrl.$inject = ['$routeParams', '$location'];

    function LeagueHomeCtrl($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams' },
            { text: 'Games', state: 'games'},
            { text: 'Games Calendar', state: 'games-calendar' },
            { text: 'Home', state: 'league-home', active: true }
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
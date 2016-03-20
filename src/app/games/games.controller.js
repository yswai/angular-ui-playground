(function () {
    'use strict';

    angular.module('eliteAdmin').controller('GamesCtrl', GamesCtrl);

    GamesCtrl.$inject = ['$routeParams', 'initialData', 'teams', 'locations', '$location', '$modal'];

    function GamesCtrl($routeParams, initialData, teams, locations, $location, $modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams' },
            { text: 'Games', state: 'games', active: true },
            { text: 'Games Calendar', state: 'games-calendar' },
            { text: 'Home', state: 'league-home'}
        ];
        vm.groupedTeams = {};
        vm.games = initialData;
        vm.go = go;
        vm.editGame = editGame;
        vm.deleteGame = deleteGame;
        vm.addNewGame = addNewGame;

        activate();

        function activate() {
            joinData();
        }

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function joinData() {
            vm.games = _.map(vm.games, function(game) {
                    var homeTeam = _.find(teams, { id: game.team1Id });
                    var awayTeam = _.find(teams, { id: game.team2Id });
                    var location = _.find(locations, { id: game.locationId });
                    return _.assign(game, {
                        homeTeam: homeTeam ? homeTeam.name : '',
                        awayTeam: awayTeam ? awayTeam.name : '',
                        location: location ? location.name : '',
                        dateTime: new Date(game.time)
                    })
                });
        }

        function editGame(game) {
            var modal = $modal.open({
                templateUrl: 'app/games/edit-game.html',
                controller: 'EditGameCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: function () {
                        return {
                            title: 'Edit game',
                            button: [
                                'Save', 'Cancel'
                            ]
                        }
                    },
                    game: function() {
                        return angular.copy(game);
                    },
                    teams: function() {
                        return teams;
                    },
                    locations: function() {
                        return locations;
                    }
                }
            });
            modal.result.then(function(editedGame) {
                _.assign(_.find(vm.games, { id: game.id}), editedGame);
                joinData();
            });
        }

        function deleteGame(game) {
            var modal = $modal.open({
                templateUrl: 'app/leagues/delete-confirm.html',
                controller: 'DeleteConfirmCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: {
                        title: 'Delete confirmation',
                        message: 'Are you sure you want to delete this game ?',
                        button: [
                            'Ok', 'Cancel'
                        ]
                    }
                }
            });
            modal.result.then(function() {
                _.remove(vm.games, { id: game.id });
                joinData();
            });
        }

        function addNewGame() {
            var modal = $modal.open({
                templateUrl: 'app/games/edit-game.html',
                controller: 'EditGameCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: {
                        title: 'Add game',
                        button: [
                            'Save', 'Cancel'
                        ]
                    },
                    game: function() {
                        return {};
                    },
                    teams: function() {
                        return teams;
                    },
                    locations: function() {
                        return locations;
                    }
                }
            });
            modal.result.then(function(newGame) {
                vm.games.push(newGame);
                joinData();
            });
        }

    }
})();
(function () {
    'use strict';

    angular.module('eliteAdmin').controller('GamesCalendarCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$scope', '$routeParams', '$location', 'games', '$modal',
                                'teams', 'locations', 'uiCalendarConfig'];

    function LeagueShellCtrl($scope, $routeParams, $location, games, $modal,
                             teams, locations, uiCalendarConfig) {
        /* jshint validthis:true */
        var vm = this;
        vm.gameEvents = [getEvents(joinData(games))];
        vm.leagueId = $routeParams.leagueId;
        vm.tabs = [
            { text: 'Teams', state: 'teams' },
            { text: 'Games', state: 'games'},
            { text: 'Games Calendar', state: 'games-calendar', active: true },
            { text: 'Home', state: 'league-home' }
        ];
        vm.addNewGame = addNewGame;
        vm.groupedTeams = {};
        vm.go = go;
        vm.calendarConfig = {
            editable: true,
            nowIndicator: true,
            header:{
                left: 'today prev,next',
                center: 'title',
                right: 'month agendaWeek agendaDay'
            },
            dayClick: onDayClick,
            eventDrop: onDrop,
            eventResize: onResize
        };

        activate();

        function go(tab) {
            $location.url('/leagues/' + vm.leagueId + '/' + tab);
        }

        function activate() {
        }

        function onDayClick(date) {
            uiCalendarConfig.calendars.calendar.fullCalendar('changeView', 'agendaDay');
            uiCalendarConfig.calendars.calendar.fullCalendar('gotoDate', date);
        }

        function updateGame(e) {
            var game = _.find(_.first(vm.gameEvents), { id: e.id });
            _.assign(game, {
                start: e._start.format('YYYY-MM-DDThh:mm:ss'),
                end: e._end.format('YYYY-MM-DDThh:mm:ss')
            });
        }

        function onDrop(e) {
            updateGame(e);
        }

        function onResize(e) {
            updateGame(e);
        }

        function getEvents(games) {
            return _.map(games, function(game) {
               return {
                   id: game.id,
                   title: game.home + ' vs ' + game.away + '\n' + game.location,
                   start: moment(new Date(game.time)).format('YYYY-MM-DDThh:mm:ss'),
                   end: moment(moment(new Date(game.time)).add('90', 'm').toDate()).format('YYYY-MM-DDThh:mm:ss')
               }
            });
        }

        function joinData() {
            return _.map(games, function(game) {
                var home = _.find(teams, { id: game.team1Id });
                var away = _.find(teams, { id: game.team2Id });
                var location = _.find(locations, { id: game.locationId });
                return _.extend(game, {
                    home: home ? home.name : '',
                    away: away ? away.name : '',
                    location: location ? location.name : ''
                });
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
                games.push(newGame);
                vm.gameEvents = [getEvents(joinData(games))];
            });
        }

    }
})();
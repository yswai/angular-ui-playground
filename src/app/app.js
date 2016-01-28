(function () {
    'use strict';
    var app = angular.module('eliteAdmin', [
        // Angular modules
        'ngRoute',

        // 3rd Party Modules
        'ui.bootstrap'
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/leagues', {
                templateUrl: 'app/leagues/leagues.html',
                controller: 'LeaguesCtrl',
                controllerAs: 'vm',
                resolve: {
                    initialData: [function () {
                        return [
                            {
                                "id": 1,
                                "name": "Cager Classic",
                                "homeScreen": "**Welcome coaches, players, and parents!** " +
                                "\n\nThis site contains full schedule information for the tournament.",
                                "rulesScreen": ""
                            },
                            {
                                "id": 2,
                                "name": "Holiday Hoops Challenge",
                                "homeScreen": "**Welcome coaches, players, and parents!** " +
                                "\n\nThis site contains full schedule information for the tournament.",
                                "rulesScreen": ""
                            },
                            {
                                "id": 3,
                                "name": "Thanksgiving Tip Off",
                                "homeScreen": "**Welcome coaches, players, and parents!** " +
                                "\n\nThis site contains full schedule information for the tournament.",
                                "rulesScreen": ""
                            }
                        ];
                    }]
                }
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();

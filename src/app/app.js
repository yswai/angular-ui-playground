(function () {
    'use strict';
    var app = angular.module('eliteAdmin', [
        // Angular modules
        'ngRoute'

        // 3rd Party Modules
    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();

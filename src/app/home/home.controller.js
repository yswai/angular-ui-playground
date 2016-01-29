(function () {
    'use strict';

    angular.module('eliteAdmin').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.notesColllapsed = true;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
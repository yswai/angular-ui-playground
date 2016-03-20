(function () {
    'use strict';

    angular.module('eliteAdmin').directive('markdown', markdown);

    markdown.$inject = [];

    function markdown() {
        var converter = new Showdown.converter();
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        function link(scope, element, attrs) {
            attrs.$observe('markdown', function (val) {
                var markup = converter.makeHtml(val);
                element.html(markup);
            });
        }
    }
})();
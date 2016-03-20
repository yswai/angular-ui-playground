(function () {
    'use strict';

    angular.module('eliteAdmin').controller('EditLocationCtrl', EditTeamCtrl);

    EditTeamCtrl.$inject = ['$scope', '$timeout', '$routeParams', '$location', 'locations', 'maps', 'currentPosition'];

    function EditTeamCtrl($scope, $timeout, $routeParams, $location, locations, maps, currentPosition) {
        $scope.models = [];
        var vm = this;
        vm.isEdit = !_.isEmpty($routeParams.id);
        vm.map = {
            center: {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude
            },
            zoom: 15
        };
        vm.marker = {
            id: 1,
            coords: currentPosition.coords
        };
        vm.ok = saveLocation;
        vm.cancel = cancel;
        vm.refreshMap = refreshMap;

        function refreshMap () {
            if (_.isEmpty(vm.address)) return;
            var geocoder = new maps.Geocoder();
            geocoder.geocode({
                address: vm.address
            }, function (result) {
                if (!_.isEmpty(result)) {
                    var addrLocation = _.first(result).geometry.location;
                    $timeout(function () {
                        vm.map.center = {
                            latitude: addrLocation.lat(),
                            longitude: addrLocation.lng()
                        };

                        vm.marker = {
                            id: 1,
                            coords: {
                                latitude: addrLocation.lat(),
                                longitude: addrLocation.lng()
                            }
                        };
                    }, 0);
                }
            });
        }

        function saveLocation () {
            if (_.isEmpty(vm.name)) return;
            var defaultLocationModel = {
                "id": _.uniqueId('location-'),
                "name": "",
                "locationUrl": "",
                "address": "",
                "position": currentPosition
            };
            if (vm.isEdit) {
                console.log('Edit Mode Save');
            } else {
                locations.push(_.extend(defaultLocationModel, {
                    name: vm.name,
                    address: vm.address
                }));
            }
            $location.path('/locations');
        }

        function cancel () {
            $location.path('/locations');
        }

    }

})();
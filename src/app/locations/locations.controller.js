(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LocationsCtrl', LocationsCtrl);

    LocationsCtrl.$inject = ['$location', 'locations', '$modal'];

    function LocationsCtrl($location, locations, $modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.locations = locations;
        vm.addNewLocation = addNewLocation;
        vm.editLocation = editLocation;
        vm.deleteLocation = deleteLocation;

        function addNewLocation() {
            $location.path('/locations/add');
            // var modal = $uibModal.open({
            //     size: 'lg',
            //     templateUrl: 'app/locations/edit-location.html',
            //     controller: 'EditLocationCtrl',
            //     controllerAs: 'vm',
            //     resolve: {
            //         properties: {
            //             title: 'Add location',
            //             button: [
            //                 'Save', 'Cancel'
            //             ]
            //         },
            //         location: function() {
            //             return null;
            //         }
            //     }
            // });
            // modal.result.then(function(newLocation) {
            //     vm.locations.push(newLocation);
            // });
        }

        function editLocation(location) {
            // var modal = $uibModal.open({
            //     size: 'lg',
            //     templateUrl: 'app/locations/edit-location.html',
            //     controller: 'EditLocationCtrl',
            //     controllerAs: 'vm',
            //     resolve: {
            //         properties: {
            //             title: 'Edit location',
            //             button: [
            //                 'Save', 'Cancel'
            //             ]
            //         },
            //         location: function() {
            //             return angular.copy(location);
            //         }
            //     }
            // });
            // modal.result.then(function(editedLocation) {
            //     var existingLocation = _.find(vm.locations, { id: location.id });
            //     _.assign(existingLocation, editedLocation);
            // });
        }

        function deleteLocation(location) {
            var modalInstance = $modal.open({
                size: 'md',
                templateUrl: 'app/leagues/delete-confirm.html',
                controller: 'DeleteConfirmCtrl',
                controllerAs: 'vm',
                resolve: {
                    properties: function() {
                        return {
                            title: 'Delete confirmation',
                            message: 'Are you sure you want to delete location "' + location.name + '"?',
                            button: [
                                'Ok', 'Cancel'
                            ]
                        }
                    }
                }
            });
            modalInstance.result.then(function(isDelete) {
                if (!isDelete) return;
                vm.locations = _.reject(vm.locations, { id: location.id});
            });
        }
    }
})();
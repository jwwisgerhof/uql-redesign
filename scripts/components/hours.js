(function () {
    'use strict';

    angular
        .module('app')
        .component('hours', {
            templateUrl: 'templates/hours.html',
            restrict: 'E',
            controller: HoursController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function HoursController($mdMedia) {
        var vm = this;
        vm.$mdMedia = $mdMedia;

        vm.hours = [
            {
                name: 'Arch Music',
                hours: '8am - 6pm',
                always: false
            },
            {
                name: 'Biol Sci',
                hours: 'Open 24 hours',
                green: true,
                always: false
            },
            {
                name: 'Bundaberg',
                hours: '8:45am - 4:45pm',
                always: false
            },
            {
                name: 'DHEngSci',
                hours: '8am - 6pm',
                always: true
            },
            {
                name: 'Duhig Study',
                hours: 'Open 24 hours',
                green: true,
                always: false
            },
            {
                name: 'Fryer',
                hours: '9am - 5pm',
                always: false
            },
            {
                name: 'Gatton',
                hours: '8:30am - 6pm',
                always: true
            }
        ]
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .component('computers', {
            templateUrl: 'templates/computers.html',
            restrict: 'E',
            controller: ComputersController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function ComputersController($mdMedia) {
        var vm = this;
        vm.$mdMedia = $mdMedia;

        vm.getTransform = function (item) {
            var percentage = item.free / item.total;
            return {
                transform: 'scaleX(' + percentage + ')'
            };
        };

        vm.computers = [
            {
                name: 'Architecture & Music Library',
                free: 10,
                used: 30,
                total: 40
            },
            {
                name: 'Biological Sciences Library',
                free: 0,
                used: 48,
                total: 48
            },
            {
                name: 'D.H. Engineering & Sciences Library',
                free: 36,
                used: 4,
                total: 40
            },
            {
                name: 'Duhig Building',
                free: 24,
                used: 46,
                total: 70
            },
            {
                name: 'Gatton Campus Library',
                free: 77,
                used: 9,
                total: 86
            },
            {
                name: 'Graduate Economics & Business Library',
                free: 31,
                used: 5,
                total: 36
            },
            {
                name: 'Herston Health Library',
                free: 34,
                used: 7,
                total: 41
            },
            {
                name: 'Mater Hospital Library',
                free: 23,
                used: 4,
                total: 27
            },
            {
                name: 'PACE Health Sciences Library',
                free: 52,
                used: 13,
                total: 65
            },
            {
                name:'Social Sciences & Humanities Library',
                free: 71,
                used: 57,
                total: 128
            }
        ]
    }
})();

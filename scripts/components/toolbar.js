(function () {
    'use strict';

    angular
        .module('app')
        .component('toolbar', {
            templateUrl: 'templates/toolbar.html',
            restrict: 'E',
            controller: ToolbarController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function ToolbarController($mdMedia, $mdSidenav) {
        var vm = this;
        vm.$mdMedia = $mdMedia;

        vm.toggleMenu = function () {
            $mdSidenav('left').toggle();
        }
    }
})();
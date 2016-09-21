(function () {
    'use strict';

    angular
        .module('app')
        .component('sidenav', {
            templateUrl: 'templates/sidenav.html',
            restrict: 'E',
            controller: SidenavController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function SidenavController($mdMedia, $mdSidenav) {
        var vm = this;
        vm.$mdMedia = $mdMedia;
    }
})();
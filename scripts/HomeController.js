(function () {
    'use strict';

    angular
        .module('app')
        .component('home', {
            templateUrl: 'templates/home.html',
            restrict: 'E',
            controller: HomeController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function HomeController($mdMedia, $mdSidenav) {
        var vm = this;

        vm.$mdMedia = $mdMedia;

        vm.searchType = null;
        vm.search = null;

        vm.toggleMenu = function () {
            $mdSidenav('left').toggle();
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .component('yourUpdates', {
            templateUrl: 'templates/your-updates.html',
            restrict: 'E',
            controller: YourUpdatesController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function YourUpdatesController() {
        var vm = this;
    }
})();
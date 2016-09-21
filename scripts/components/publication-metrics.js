(function () {
    'use strict';

    angular
        .module('app')
        .component('publicationMetrics', {
            templateUrl: 'templates/publication-metrics.html',
            restrict: 'E',
            controller: PublicationMetricsController,
            controllerAs: 'vm'
        });

    /** @ngInject **/
    function PublicationMetricsController() {
        var vm = this;
    }
})();
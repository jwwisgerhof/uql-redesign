(function () {
    'use strict';

    angular
        .module('app')
        .component('blog', {
            templateUrl: 'templates/blog.html',
            restrict: 'E',
            controller: BlogController,
            controllerAs: 'vm',
            bindings: {
                blog: '='
            }
        });

    /** @ngInject **/
    function BlogController() {
        var vm = this;
    }
})();
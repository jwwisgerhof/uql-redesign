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
    function HomeController($mdMedia) {
        var vm = this;

        vm.blogs = [
            {
                image: "images/blog1.png",
                title: "Belvedere Woman",
                description: "The UQ Library invites you to the launch of Belvedere Woman, the latest book by Ian Callinan AC. He will be joined in conversation by fellow author Emeritus Professor Michael Wilding from the University of Sydney. <br /><br />The book is set in Brisbane between the 1950's and 2000 and is a story about how snobbery ruined a young woman's life."
            },
            {
                image: "images/blog2.png",
                title: "UQ Library Excellence Award",
                description: "The UQ Library Excellence Award is presented annually to up to three UQ undergraduate students who demonstrate excellence in the use of the Library to enhance their studies. <br /><br />The Award also acknowledges how Library resources support teaching and learning"
            }
        ];

        vm.$mdMedia = $mdMedia;
    }
})();
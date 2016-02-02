namespace MyApp {

    angular.module("MyApp", ["ngRoute", "ngCordova"]).config(($routeProvider:ng.route.IRouteProvider) => {

        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .when('/geolocation', {
                templateUrl: '/views/geolocation.html',
                controller: MyApp.Controllers.GeolocationController,
                controllerAs: 'vm'
            })
            .when('/motion', {
                templateUrl: '/views/motion.html',
                controller: MyApp.Controllers.MotionController,
                controllerAs: 'vm'
            })

    });


}
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Day27ApacheCordova;
(function (Day27ApacheCordova) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = Day27ApacheCordova.Application || (Day27ApacheCordova.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(Day27ApacheCordova || (Day27ApacheCordova = {}));
var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "ngCordova"]).config(function ($routeProvider) {
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
        });
    });
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var GeolocationController = (function () {
            function GeolocationController($cordovaGeolocation) {
                this.$cordovaGeolocation = $cordovaGeolocation;
                this.options = {
                    timeout: 10000,
                    enableHighAccuracy: false
                };
            }
            GeolocationController.prototype.getCurrentLocation = function () {
                var self = this;
                this.$cordovaGeolocation.getCurrentPosition(this.options)
                    .then(function (location) {
                    self.lat = location.coords.latitude;
                    self.long = location.coords.longitude;
                }, function (error) {
                    console.log(error);
                });
            };
            GeolocationController.prototype.watchLocation = function () {
                var self = this;
                var watch = self.$cordovaGeolocation.watchPosition(self.options);
                watch.then(null, function (error) {
                    console.log(error);
                }, function (location) {
                    self.watchLat = location.coords.latitude;
                    self.watchLong = location.coords.longitude;
                });
            };
            return GeolocationController;
        })();
        Controllers.GeolocationController = GeolocationController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = "This is the Home Page";
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MotionController = (function () {
            function MotionController($cordovaDeviceMotion) {
                this.$cordovaDeviceMotion = $cordovaDeviceMotion;
                this.options = {
                    frequency: 20000
                };
            }
            MotionController.prototype.getMotion = function () {
                var self = this;
                document.addEventListener("deviceready", function () {
                    self.$cordovaDeviceMotion.getCurrentAcceleration()
                        .then(function (result) {
                        self.x = result.x;
                        self.y = result.y;
                        self.z = result.z;
                    });
                }, false);
                document.addEventListener("deviceready", function () {
                    var watch = self.$cordovaDeviceMotion.watchAcceleration(self.options);
                    watch.then(null, function (error) {
                        alert(error);
                    }, function (result) {
                        self.x = result.x;
                        self.y = result.y;
                        self.z = result.z;
                    });
                    watch.clearWatch();
                }, false);
            };
            return MotionController;
        })();
        Controllers.MotionController = MotionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appBundle.js.map
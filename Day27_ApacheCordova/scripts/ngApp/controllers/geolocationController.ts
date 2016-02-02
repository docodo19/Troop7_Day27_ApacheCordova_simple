namespace MyApp.Controllers {

    export class GeolocationController {
        private options = {
            timeout: 10000,
            enableHighAccuracy: false
        }
        public lat;
        public long;
        public watchLat;
        public watchLong;

        constructor(private $cordovaGeolocation: any) {
        }

        public getCurrentLocation() {
            let self = this;
            this.$cordovaGeolocation.getCurrentPosition(this.options)
                .then(function (location) {
                    self.lat = location.coords.latitude;
                    self.long = location.coords.longitude;
                }, function (error) {
                    console.log(error);
                });
        }

        public watchLocation() {
            let self = this;
            let watch = self.$cordovaGeolocation.watchPosition(self.options);
            watch.then(null, function (error) {
                console.log(error);
            }, function (location) {
                self.watchLat = location.coords.latitude;
                self.watchLong = location.coords.longitude;
            });
        }
    }
}
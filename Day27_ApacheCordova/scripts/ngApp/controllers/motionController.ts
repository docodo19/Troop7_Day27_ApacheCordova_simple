namespace MyApp.Controllers {

    export class MotionController {
        private options = {
            frequency: 20000
        }
        public x;
        public y;
        public z;

        constructor(private $cordovaDeviceMotion: any) {
        }

        public getMotion() {
            let self = this;
            document.addEventListener("deviceready", function () {

                self.$cordovaDeviceMotion.getCurrentAcceleration()
                    .then(function (result) {
                        self.x = result.x;
                        self.y = result.y;
                        self.z = result.z;
                    });
            }, false);

            document.addEventListener("deviceready", function () {
                let watch = self.$cordovaDeviceMotion.watchAcceleration(self.options);
                watch.then(null, function (error) {
                    alert(error);
                }, function (result) {
                    self.x = result.x;
                    self.y = result.y;
                    self.z = result.z;
                });

                watch.clearWatch();


            }, false);

        }
    }
}
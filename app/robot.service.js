System.register(['./mock-robots', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_robots_1, core_1;
    var RobotService;
    return {
        setters:[
            function (mock_robots_1_1) {
                mock_robots_1 = mock_robots_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RobotService = (function () {
                function RobotService() {
                }
                RobotService.prototype.getRobots = function () {
                    return Promise.resolve(mock_robots_1.ROBOTS);
                };
                // See the "Take it slow" appendix
                RobotService.prototype.getRobotsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_robots_1.ROBOTS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                RobotService.prototype.getRobot = function (id) {
                    return Promise.resolve(mock_robots_1.ROBOTS).then(function (robots) { return robots.filter(function (robot) { return robot.id === id; })[0]; });
                };
                RobotService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RobotService);
                return RobotService;
            }());
            exports_1("RobotService", RobotService);
        }
    }
});
/*
Brandon Oden
3/17/2016
 */ 
//# sourceMappingURL=robot.service.js.map
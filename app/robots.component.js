System.register(['angular2/core', 'angular2/router', './robot-detail.component', './robot.service'], function(exports_1, context_1) {
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
    var core_1, router_1, robot_detail_component_1, robot_service_1;
    var RobotsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (robot_detail_component_1_1) {
                robot_detail_component_1 = robot_detail_component_1_1;
            },
            function (robot_service_1_1) {
                robot_service_1 = robot_service_1_1;
            }],
        execute: function() {
            RobotsComponent = (function () {
                function RobotsComponent(_router, _robotService) {
                    this._router = _router;
                    this._robotService = _robotService;
                }
                RobotsComponent.prototype.getRobots = function () {
                    var _this = this;
                    this._robotService.getRobots().then(function (robots) { return _this.robots = robots; });
                };
                RobotsComponent.prototype.ngOnInit = function () {
                    this.getRobots();
                };
                RobotsComponent.prototype.onSelect = function (robot) { this.selectedRobot = robot; };
                RobotsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['RobotDetail', { id: this.selectedRobot.id }]);
                };
                RobotsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-robots',
                        templateUrl: 'app/robots.component.html',
                        styleUrls: ['app/robots.component.css'],
                        directives: [robot_detail_component_1.RobotDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, robot_service_1.RobotService])
                ], RobotsComponent);
                return RobotsComponent;
            }());
            exports_1("RobotsComponent", RobotsComponent);
        }
    }
});
/*
Brandon Oden
3/17/2016
 */ 
//# sourceMappingURL=robots.component.js.map
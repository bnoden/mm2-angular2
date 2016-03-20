System.register(['angular2/core', 'angular2/router', './robot.service'], function(exports_1, context_1) {
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
    var core_1, router_1, robot_service_1;
    var FavoritesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (robot_service_1_1) {
                robot_service_1 = robot_service_1_1;
            }],
        execute: function() {
            FavoritesComponent = (function () {
                function FavoritesComponent(_router, _robotService) {
                    this._router = _router;
                    this._robotService = _robotService;
                    this.robots = [];
                }
                FavoritesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._robotService.getRobots()
                        .then(function (robots) { return _this.robots = robots.slice(1, 5); });
                };
                FavoritesComponent.prototype.gotoDetail = function (robot) {
                    var link = ['RobotDetail', { id: robot.id }];
                    this._router.navigate(link);
                };
                FavoritesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-favorites',
                        templateUrl: 'app/favorites.component.html',
                        styleUrls: ['app/favorites.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, robot_service_1.RobotService])
                ], FavoritesComponent);
                return FavoritesComponent;
            }());
            exports_1("FavoritesComponent", FavoritesComponent);
        }
    }
});
/*
Brandon Oden
3/17/2016
 */ 
//# sourceMappingURL=favorites.component.js.map
System.register(['angular2/core', 'angular2/router', './robot.service', './favorites.component', './robots.component', './robot-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, robot_service_1, favorites_component_1, robots_component_1, robot_detail_component_1;
    var AppComponent;
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
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            },
            function (robots_component_1_1) {
                robots_component_1 = robots_component_1_1;
            },
            function (robot_detail_component_1_1) {
                robot_detail_component_1 = robot_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Mega Man 2';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <img src=\"/img/title03.png\" width=\"240px\">\n    <nav>\n      <a [routerLink]=\"['Favorites']\">Favorites</a>\n      <a [routerLink]=\"['Robots']\">List</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            robot_service_1.RobotService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/favorites',
                            name: 'Favorites',
                            component: favorites_component_1.FavoritesComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'RobotDetail',
                            component: robot_detail_component_1.RobotDetailComponent
                        },
                        {
                            path: '/robots',
                            name: 'Robots',
                            component: robots_component_1.RobotsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
Brandon Oden
3/17/2016
 */ 
//# sourceMappingURL=app.component.js.map
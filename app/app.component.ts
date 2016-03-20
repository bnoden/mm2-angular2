import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RobotService } from './robot.service';
import { FavoritesComponent } from './favorites.component';
import { RobotsComponent } from './robots.component';
import { RobotDetailComponent } from './robot-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Favorites']">Favorites</a>
      <a [routerLink]="['Robots']">List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    RobotService
  ]
})
@RouteConfig([
  {
      path: '/favorites',
    name: 'Favorites',
    component: FavoritesComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'RobotDetail',
    component: RobotDetailComponent
  },
  {
    path: '/robots',
    name: 'Robots',
    component: RobotsComponent
  }
])
export class AppComponent {
  title = 'Mega Man 2';
}

/*
Brandon Oden
3/17/2016
 */
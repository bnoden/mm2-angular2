import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Robot } from './robot';
import { RobotService } from './robot.service';

@Component({
  selector: 'my-favorites',
  templateUrl: 'app/favorites.component.html',
  styleUrls: ['app/favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  robots: Robot[] = [];

  constructor(
    private _router: Router,
    private _robotService: RobotService) {
  }

  ngOnInit() {
    this._robotService.getRobots()
      .then(robots => this.robots = robots.slice(1, 5));
  }

  gotoDetail(robot: Robot) {
    let link = ['RobotDetail', { id: robot.id }];
    this._router.navigate(link);
  }
}


/*
Brandon Oden
3/17/2016
 */
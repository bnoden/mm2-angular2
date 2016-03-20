import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Robot } from './robot';
import { RobotDetailComponent } from './robot-detail.component';
import { RobotService } from './robot.service';

@Component({
  selector: 'my-robots',
  templateUrl: 'app/robots.component.html',
  styleUrls:  ['app/robots.component.css'],
  directives: [RobotDetailComponent]
})
export class RobotsComponent implements OnInit {
  robots: Robot[];
  selectedRobot: Robot;

  constructor(
    private _router: Router,
    private _robotService: RobotService) { }

  getRobots() {
    this._robotService.getRobots().then(robots => this.robots = robots);
  }

  ngOnInit() {
    this.getRobots();
  }

  onSelect(robot: Robot) { this.selectedRobot = robot; }

  gotoDetail() {
    this._router.navigate(['RobotDetail', { id: this.selectedRobot.id }]);
  }
}


/*
Brandon Oden
3/17/2016
 */
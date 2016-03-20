import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Robot } from './robot';
import { RobotService } from './robot.service';

@Component({
  selector: 'my-robot-detail',
  templateUrl: 'app/robot-detail.component.html',
  styleUrls: ['app/robot-detail.component.css'],
  inputs: ['robot']
})
export class RobotDetailComponent implements OnInit {
  robot: Robot;

  constructor(
    private _robotService: RobotService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._robotService.getRobot(id)
      .then(robot => this.robot = robot);
  }

  goBack() {
    window.history.back();
  }
}


/*
Brandon Oden
3/17/2016
 */
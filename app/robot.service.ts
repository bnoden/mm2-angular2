import { Robot } from './robot';
import { ROBOTS } from './mock-robots';
import { Injectable } from 'angular2/core';

@Injectable()
export class RobotService {
  getRobots() {
    return Promise.resolve(ROBOTS);
  }

  // See the "Take it slow" appendix
  getRobotsSlowly() {
    return new Promise<Robot[]>(resolve =>
      setTimeout(() => resolve(ROBOTS), 2000) // 2 seconds
    );
  }

  getRobot(id: number) {
    return Promise.resolve(ROBOTS).then(
      robots => robots.filter(robot => robot.id === id)[0]
    );
  }
}


/*
Brandon Oden
3/17/2016
 */
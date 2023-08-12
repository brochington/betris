import './style.css';
import { World } from '@brochington/ecstatic';

import {
  Canvas,
  Stage,
  Components,
  Clock,
  Block,
  Position,
} from './components';
import addSystems from './systems';

class Betris {
  world: World<Components>;
  clock: Clock;
  canvas: Canvas;
  stage: Stage;

  running: boolean = true;

  constructor() {
    this.world = new World<Components>();
    this.clock = new Clock(1000);
    this.canvas = new Canvas(
      document.getElementById('betris-canvas') as HTMLCanvasElement
    );
    this.stage = new Stage(10, 20);

    addSystems(this.world);

    this.world
      .createEntity()
      .add(this.canvas)
      .add(this.stage)
      .add(new Block('orange'))
      .add(new Position(5, 5));

    this.world.createEntity().add(this.clock);

  }

  run = () => {
    this.running = true;
    this.tick();
  };

  tick = () => {
    this.world.systems.run();

    if (this.running) {
      requestAnimationFrame(this.tick);
    }
  };
}

async function main() {
  const betris = new Betris();

  betris.run();
}

main();

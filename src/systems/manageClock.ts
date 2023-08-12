import { Block, Position, SystemArgs } from '../components';
import { Clock } from '../components/';

function manageClock({ components, world }: SystemArgs) {
  const clock = components.get(Clock);

  const currentTime = Date.now();
  if (currentTime - clock.lastTick > clock.tickInterval) {
    console.log('tick');
    clock.lastTick = currentTime;
    clock.is_tick = true;

    // TEMP
    world.locateAll([Block, Position]).forEach((entity) => {
      const position = entity.get(Position);
      position.y += 1;
    });
  } else {
    clock.is_tick = false;
  }
}

manageClock.components = [Clock];

export default manageClock;

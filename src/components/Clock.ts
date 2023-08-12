export default class Clock {
  lastTick: number = 0;
  tickInterval: number; // ms
  is_tick = false;

  constructor(tickInterval: number) {
    this.tickInterval = tickInterval;
  }
}

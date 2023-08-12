import { SystemFuncArgs } from '@brochington/ecstatic';

import Clock from './Clock';
import Canvas from './Canvas';
import Stage from './Stage';
import Block from './Block';
import Position from './Position';
import Tetramino from './Tetramino';

export type Components = Clock | Canvas | Stage | Block | Position | Tetramino;

export type SystemArgs = SystemFuncArgs<Components>;

export { Clock, Canvas, Stage, Block, Position, Tetramino };

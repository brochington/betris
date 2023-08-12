import { Block, Canvas, Position, Stage, SystemArgs } from '../components';

function renderBlock({ components }: SystemArgs) {
  const canvas = components.get(Canvas);
  const block = components.get(Block);
  const position = components.get(Position);
  const stage = components.get(Stage);

  const gridWidth = canvas.canvas.width / 3;
  const cellWidth = gridWidth / stage.width;
  const cellHeight = canvas.canvas.height / stage.height;

  canvas.context.fillStyle = block.color;
  canvas.context.fillRect(
    position.x * cellWidth + gridWidth,
    position.y * cellHeight,
    cellWidth,
    cellHeight
  );
}


renderBlock.components = [Canvas, Block, Position, Stage];

export default renderBlock;
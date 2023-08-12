import { Stage, Canvas, SystemArgs } from '../components';

function renderStage({ components }: SystemArgs) {
  const canvas = components.get(Canvas);

  canvas.context.fillStyle = 'black';
  canvas.context.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

  // draw a 10x20 grid  of white bordered black cells
  const stage = components.get(Stage);

  const gridWidth = canvas.canvas.width / 3;
  const cellWidth = gridWidth / stage.width;
  const cellHeight = canvas.canvas.height / stage.height;

  canvas.context.fillStyle = 'black';
  canvas.context.lineWidth = 1;

  for (let x = 0; x < stage.width; x++) {
    for (let y = 0; y < stage.height; y++) {
      canvas.context.strokeStyle = 'white';
      canvas.context.strokeRect(
        x * cellWidth + gridWidth,
        y * cellHeight,
        cellWidth,
        cellHeight
      );
    }
  }
}

renderStage.components = [Canvas, Stage];

export default renderStage;

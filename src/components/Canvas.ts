export default class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    scale = window.devicePixelRatio;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
        
        this.canvas.style.width = 640 + 'px';
        this.canvas.style.height = 480 + 'px';

        this.canvas.width = Math.floor(window.innerWidth * this.scale);
        this.canvas.height = Math.floor(window.innerHeight * this.scale);
    }
}
export default class Block {
    color: string;
    status: BlockState = 'falling'

    constructor(color: string) {
        this.color = color;
    }
}
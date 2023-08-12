/* Tetramino variants:

1. I
[]
[]
[]
[] 

2. L
[]
[]
[][]

3: J
  []
  []
[][]

4. T
[]
[][]
[]

5: S
[]
[][]
  []

6: Z
  []
[][]
[]

7: O
[][]
[][]

*/

export default class Tetramino {
  variant: TetraminoVariant;

  // entityIds of the blocks
  blocks: [string, string, string, string];

  constructor(variant: TetraminoVariant, blocks: [string, string, string, string]) {
    this.variant = variant;
    this.blocks = blocks;
  }
}

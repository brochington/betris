/// <reference types="vite/client" />

interface Renderer {
  render(): void;
}

type TetraminoVariant = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

type BlockState = 'falling' | 'landed' | 'cleared';
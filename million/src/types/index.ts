export const GameMode = {
  SINGLE_SEQUENCES: 'single sequences',
  SPLIT_SEQUENCE: 'split sequence',
  EIGHT_SPLIT: 'eight split',
} as const

export type GameMode = (typeof GameMode)[keyof typeof GameMode]

export const ConfigOption = {
  NUMBER_OF_KEYS: 'NUMBER_OF_KEYS',
  NUMBER_OF_SETS: 'NUMBER_OF_SETS',
} as const

export type ConfigOption = (typeof ConfigOption)[keyof typeof ConfigOption]

export const GameInputs = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  W: 'w',
  A: 'a',
  S: 's',
  D: 'd',
} as const

export type GameInputs = (typeof GameInputs)[keyof typeof GameInputs]

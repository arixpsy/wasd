export const GameMode = {
  SINGLE_SEQUENCES: 'single sequences',
  SPLIT_SEQUENCE: 'split sequence',
  EIGHT_SPLIT: 'eight split',
} as const

export type GameMode = (typeof GameMode)[keyof typeof GameMode]

export const ConfigOption = {
  NUMBER_OF_KEYS: 'NUMBER_OF_KEYS',
  NUMBER_OF_SETS: 'NUMBER_OF_SETS',
  KEY_TYPE: 'KEY_TYPE',
} as const

export type ConfigOption = (typeof ConfigOption)[keyof typeof ConfigOption]

export type ConfigOptions = {
  [ConfigOption.NUMBER_OF_KEYS]: number
  [ConfigOption.NUMBER_OF_SETS]: number
  [ConfigOption.KEY_TYPE]: KeyType
}

export const KeyType = {
  LETTERS: 'Letters',
  ARROWS: 'Arrows',
  ALL: 'All',
} as const

export type KeyType = (typeof KeyType)[keyof typeof KeyType]

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

export const GameState = {
  READY: 'ready',
  RUNNING: 'running',
  COMPLETED: 'completed',
} as const

export type GameState = (typeof GameState)[keyof typeof GameState]

export const KeyTileViewState = {
  DEFAULT: 'default',
  CORRECT: 'correct',
  WRONG: 'wrong',
} as const

export type KeyTileViewState =
  (typeof KeyTileViewState)[keyof typeof KeyTileViewState]

export const Sound = {
  OFF: '',
  OSU: 'osu.mp3',
  MESO: 'meso.wav',
} as const

export type Sound = (typeof Sound)[keyof typeof Sound]

export type SoundSettings = {
  volume: number
  keySuccessSound: Sound | ''
  keyErrorSound: Sound | ''
}

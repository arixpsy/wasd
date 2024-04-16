import { GameMode, ConfigOption, KeyType } from '@/types'

export const GAME_CONFIG_OPTIONS: Record<
  GameMode,
  {
    [ConfigOption.NUMBER_OF_KEYS]: Array<number>
    [ConfigOption.NUMBER_OF_SETS]?: Array<number>
    [ConfigOption.KEY_TYPE]?: Array<KeyType>
  }
> = {
  [GameMode.SINGLE_SEQUENCES]: {
    [ConfigOption.NUMBER_OF_KEYS]: [4, 5, 6, 7],
    [ConfigOption.NUMBER_OF_SETS]: [8, 10, 15],
    [ConfigOption.KEY_TYPE]: [KeyType.ALL, KeyType.ARROWS, KeyType.LETTERS],
  },
  [GameMode.SPLIT_SEQUENCE]: {
    [ConfigOption.NUMBER_OF_KEYS]: [10, 15, 20],
  },
  [GameMode.EIGHT_SPLIT]: {
    [ConfigOption.NUMBER_OF_KEYS]: [20, 25, 30],
  },
}

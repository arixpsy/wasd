import { GameMode, ConfigOption } from '@/types'

export const GAME_CONFIG_OPTIONS: Record<
  GameMode,
  Array<{ option: ConfigOption; values: Array<number> }>
> = {
  [GameMode.SINGLE_SEQUENCES]: [
    { option: ConfigOption.NUMBER_OF_KEYS, values: [4, 5, 6, 7] },
    { option: ConfigOption.NUMBER_OF_SETS, values: [5, 8, 10] },
  ],
  [GameMode.SPLIT_SEQUENCE]: [
    { option: ConfigOption.NUMBER_OF_KEYS, values: [10, 15, 20] },
  ],
  [GameMode.EIGHT_SPLIT]: [
    { option: ConfigOption.NUMBER_OF_KEYS, values: [20, 25, 30] },
  ],
}

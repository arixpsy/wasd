import { GameMode, ConfigOption } from '@/types'
import { GAME_CONFIG_OPTIONS } from '@/utils/constants/gameConfig'

export const getDefaultConfigOptions = (mode: GameMode) => {
  const configList = GAME_CONFIG_OPTIONS[mode]
  const defaultConfig: Record<ConfigOption, number> = {
    [ConfigOption.NUMBER_OF_KEYS]: 0,
    [ConfigOption.NUMBER_OF_SETS]: 0,
  }

  for (const config of configList) {
    defaultConfig[config.option] = config.values[0]
  }

  return defaultConfig
}

import { GameMode, ConfigOption, GameInputs } from '@/types'
import { GAME_CONFIG_OPTIONS } from '@/utils/constants/gameConfig'
import { randomInt } from '@/utils/functions/utils'

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

export const generatedRandomGameInput = () =>
  Object.values(GameInputs)[randomInt(7)]

// Single Sequence
export const newViewState = (size: number) => new Array(size).fill(true)

export const isInputSequenceCorrect = (
  input: Array<string>,
  sequence: Array<string>
) => {
  const lastInputIndex = input.length - 1

  if (input[lastInputIndex] === sequence[lastInputIndex]) {
    return true
  }
  return false
}

export const getCurrentSet = (
  sequence: Array<GameInputs>,
  currentSetIndex: number,
  keys: number
) => sequence.slice(currentSetIndex * keys, currentSetIndex * keys + keys) || []
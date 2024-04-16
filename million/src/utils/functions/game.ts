import {
  GameMode,
  ConfigOption,
  GameInputs,
  KeyTileViewState,
  KeyType,
  ConfigOptions,
} from '@/types'
import { GAME_CONFIG_OPTIONS } from '@/utils/constants/gameConfig'
import { randomInt } from '@/utils/functions/utils'

export const getDefaultConfigOptions = (mode: GameMode) => {
  const configList = GAME_CONFIG_OPTIONS[mode]
  const defaultConfig: ConfigOptions = {
    [ConfigOption.NUMBER_OF_KEYS]: 0,
    [ConfigOption.NUMBER_OF_SETS]: 0,
    [ConfigOption.KEY_TYPE]: KeyType.ALL,
  }

  defaultConfig[ConfigOption.NUMBER_OF_KEYS] =
    configList[ConfigOption.NUMBER_OF_KEYS][0]

  const sets = configList[ConfigOption.NUMBER_OF_SETS]
  const keyTypes = configList[ConfigOption.KEY_TYPE]

  if (sets) defaultConfig[ConfigOption.NUMBER_OF_SETS] = sets[0]
  if (keyTypes) defaultConfig[ConfigOption.KEY_TYPE] = keyTypes[0]

  return defaultConfig
}

export const generatedRandomGameInput = (type?: KeyType) => {
  switch (type) {
    case 'Arrows':
      return Object.values(GameInputs)[randomInt(3)]
    case 'Letters':
      return Object.values(GameInputs)[randomInt(3) + 4]
    default:
      return Object.values(GameInputs)[randomInt(7)]
  }
}

// Single Sequence
export const newViewState = (size: number): Array<KeyTileViewState> =>
  new Array(size).fill(KeyTileViewState.DEFAULT)

export const setNextKeyViewState = (
  currentViewState: Array<KeyTileViewState>,
  nextKeyIndex: number,
  state: KeyTileViewState
): Array<KeyTileViewState> =>
  currentViewState.map((v, i) => (i === nextKeyIndex ? state : v))

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

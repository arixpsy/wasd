import { createContext } from 'react'
import {
  ConfigOption,
  type ConfigOptions,
  GameMode,
  KeyType,
} from '@/utils/constants/enums'
import { getDefaultConfigOptions } from '@/utils/functions/game'

type GameConfigContext = {
  gameMode: GameMode
  handleSetGameMode: (mode: GameMode) => void
  configOptions: ConfigOptions
  handleSetConfig: (option: ConfigOption, value: number | KeyType) => void
}

const GameConfigContext = createContext<GameConfigContext>({
  gameMode: GameMode.SPLIT_SEQUENCE,
  handleSetGameMode: () => {},
  configOptions: getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES),
  handleSetConfig: () => {},
})

export default GameConfigContext

import { type PropsWithChildren, useState } from 'react'
import GameConfigContext from '@/context/useGameConfig'
import {
  ConfigOption,
  type ConfigOptions,
  GameMode,
  KeyType,
} from '@/utils/constants/enums'
import { getDefaultConfigOptions } from '@/utils/functions/game'

const GameConfigProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SINGLE_SEQUENCES)
  const [configOptions, setConfigOptions] = useState<ConfigOptions>(
    getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES)
  )

  const handleSetGameMode = (mode: GameMode) => {
    setConfigOptions(getDefaultConfigOptions(mode))
    setGameMode(mode)
  }

  const handleSetConfig = (option: ConfigOption, value: number | KeyType) =>
    setConfigOptions((config) => ({
      ...config,
      [option]: value,
    }))

  return (
    <GameConfigContext.Provider
      value={{
        gameMode,
        handleSetGameMode,
        configOptions,
        handleSetConfig,
      }}
    >
      {children}
    </GameConfigContext.Provider>
  )
}

export default GameConfigProvider

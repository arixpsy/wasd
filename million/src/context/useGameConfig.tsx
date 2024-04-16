import { PropsWithChildren, createContext, useState } from 'react'
import { ConfigOption, ConfigOptions, GameMode, KeyType } from '@/types'
import { getDefaultConfigOptions } from '@/utils/functions/game'

type GameConfigContext = {
  gameMode: GameMode
  handleSetGameMode: (mode: GameMode) => void
  configOptions: ConfigOptions
  handleSetConfig: (option: ConfigOption, value: number | KeyType) => void
}

export const GameConfigContext = createContext<GameConfigContext>({
  gameMode: GameMode.SPLIT_SEQUENCE,
  handleSetGameMode: () => {},
  configOptions: getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES),
  handleSetConfig: () => {},
})

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

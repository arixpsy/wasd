import { PropsWithChildren, createContext, useState } from 'react'
import { ConfigOption, GameMode } from '@/types'
import { getDefaultConfigOptions } from '@/utils/functions/gameConfig'

type GameConfigContext = {
  gameMode: GameMode
  handleSetGameMode: (mode: GameMode) => void
  configOptions: Record<ConfigOption, number>
  handleSetConfig: (option: ConfigOption, value: number) => void
}

export const GameConfigContext = createContext<GameConfigContext>({
  gameMode: GameMode.SPLIT_SEQUENCE,
  handleSetGameMode: () => {},
  configOptions: getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES),
  handleSetConfig: () => {},
})

const GameConfigProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SINGLE_SEQUENCES)
  const [configOptions, setConfigOptions] = useState<
    Record<ConfigOption, number>
  >(getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES))

  const handleSetGameMode = (mode: GameMode) => {
    setConfigOptions(getDefaultConfigOptions(mode))
    setGameMode(mode)
  }

  const handleSetConfig = (option: ConfigOption, value: number) =>
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

import { ConfigOption, GameMode } from '@/types'
import { PropsWithChildren, createContext, useState } from 'react'

type GameConfigContext = {
  gameMode: GameMode
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>
  configOptions: Record<ConfigOption, number>
  setConfigOptions: React.Dispatch<
    React.SetStateAction<Record<ConfigOption, number>>
  >
}

export const GameConfigContext = createContext<GameConfigContext>({
  gameMode: GameMode.SPLIT_SEQUENCE,
  setGameMode: () => {},
  configOptions: {
    [ConfigOption.NUMBER_OF_KEYS]: 0,
    [ConfigOption.NUMBER_OF_SETS]: 0,
  },
  setConfigOptions: () => {},
})

const GameConfigProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SINGLE_SEQUENCES)
  const [configOptions, setConfigOptions] = useState<
    Record<ConfigOption, number>
  >({
    [ConfigOption.NUMBER_OF_KEYS]: 0,
    [ConfigOption.NUMBER_OF_SETS]: 0,
  })

  return (
    <GameConfigContext.Provider
      value={{
        gameMode,
        setGameMode,
        configOptions,
        setConfigOptions,
      }}
    >
      {children}
    </GameConfigContext.Provider>
  )
}

export default GameConfigProvider

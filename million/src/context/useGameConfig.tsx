import { PropsWithChildren, createContext, useState } from 'react'
import { ConfigOption, GameMode } from '@/types'
import { getDefaultConfigOptions } from '@/utils/functions/gameConfig'

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
  configOptions: getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES),
  setConfigOptions: () => {},
})

const GameConfigProvider = ({ children }: PropsWithChildren) => {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.SINGLE_SEQUENCES)
  const [configOptions, setConfigOptions] = useState<
    Record<ConfigOption, number>
  >(getDefaultConfigOptions(GameMode.SINGLE_SEQUENCES))

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

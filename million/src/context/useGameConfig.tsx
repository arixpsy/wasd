import { PropsWithChildren, createContext } from 'react'

type GameConfigContext = {}

export const GameConfigContext = createContext<GameConfigContext>({})

const GameConfigProvider = ({ children }: PropsWithChildren) => {
  return (
    <GameConfigContext.Provider value={{}}>
      {children}
    </GameConfigContext.Provider>
  )
}

export default GameConfigProvider

import { useContext, useMemo } from 'react'
import Game from '@/components/Game'
import GameConfigPanel from '@/components/GameConfigPanel'
import { GameConfigContext } from '@/context/useGameConfig'

const Content = () => {
  const {
    gameMode,
    configOptions: { NUMBER_OF_KEYS: keys, NUMBER_OF_SETS: sets },
  } = useContext(GameConfigContext)

  const renderGame = useMemo(() => {
    switch (gameMode) {
      case 'eight split':
        return <></>
      case 'split sequence':
        return <></>
      default:
        return <Game.Default key={gameMode + keys + sets} />
    }
  }, [gameMode, keys, sets])

  return (
    <div className='flex flex-col'>
      <div className='my-5 flex justify-center'>
        <GameConfigPanel />
      </div>
      {renderGame}
    </div>
  )
}

export default Content

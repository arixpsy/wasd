import { useContext, Fragment } from 'react'
import { ConfigOption, GameMode } from '@/types'
import { GameConfigContext } from '@/context/useGameConfig'
import GameConfigOption from '@/components/GameConfigPanel/GameConfigOption'
import TransitionalDiv from '@/components/TransitionalDiv'
import { GAME_CONFIG_OPTIONS } from '@/utils/constants/gameConfig'
import { gameModeLabel } from '@/utils/constants/labels'

const GameConfigPanel = () => {
  const { gameMode, configOptions, handleSetGameMode, handleSetConfig } =
    useContext(GameConfigContext)
  const configOptionsDisplay = GAME_CONFIG_OPTIONS[gameMode]

  return (
    <TransitionalDiv className='rounded-lg bg-gray-200 dark:bg-neutral-700'>
      <div className='flex items-center gap-5 px-4 py-3 text-xs text-gray-400 dark:text-neutral-500'>
        {Object.values(GameMode).map((mode) => (
          <GameConfigOption
            key={mode}
            isActive={mode === gameMode}
            onClick={() => handleSetGameMode(mode)}
          >
            {gameModeLabel[mode]}
          </GameConfigOption>
        ))}

        {(Object.keys(configOptionsDisplay) as Array<ConfigOption>).map(
          (config) => (
            <Fragment key={config}>
              <div className='h-5 w-1 rounded-lg bg-gray-300 dark:bg-neutral-600' />
              {configOptionsDisplay[config]?.map((value) => (
                <GameConfigOption
                  key={config + value}
                  isActive={configOptions[config] === value}
                  onClick={() => handleSetConfig(config, value)}
                >
                  {config === ConfigOption.NUMBER_OF_SETS && 'x'}
                  {value}
                </GameConfigOption>
              ))}
            </Fragment>
          )
        )}
      </div>
    </TransitionalDiv>
  )
}

export default GameConfigPanel

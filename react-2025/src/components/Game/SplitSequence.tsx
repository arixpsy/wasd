import { useContext, useEffect, useRef } from 'react'
import KeyTile from '@/components/KeyTile'
import ProgressBar from '@/components/ProgressBar'
import ResetGameButton from '@/components/ResetGameButton'
import useSplitSequenceGame from '@/hooks/useSplitSequenceGame'
import GameConfigContext from '@/context/useGameConfig'
import { GameState } from '@/utils/constants/enums'
import Results from '@/components/Results'

const SplitSequence = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { configOptions } = useContext(GameConfigContext)
  const {
    keylogs,
    gameState,
    handleBlurGameInput,
    handleFocusGameInput,
    handleInput,
    isGameInputFocused,
    arrowProgress,
    letterProgress,
    arrowSequence,
    letterSequence,
    arrowViewState,
    letterViewState,
    stopWatch: { time },
    resetGame,
  } = useSplitSequenceGame(inputRef, configOptions.NUMBER_OF_KEYS)

  useEffect(() => {
    if (gameState === GameState.READY) {
      handleFocusGameInput()
    }
  }, [handleFocusGameInput, gameState])

  if (gameState === GameState.COMPLETED)
    return (
      <div className='relative grid h-full place-items-center'>
        <Results logs={keylogs} />

        {/* TODO: add chartjs */}

        <ResetGameButton onClick={resetGame} className='relative z-10 mt-10' />
      </div>
    )

  return (
    <div className='relative grid h-full items-center'>
      <div className='flex flex-col items-center'>
        <div className='mb-10 text-center text-7xl dark:text-white'>{time}</div>
        <div className='relative w-full'>
          <div
            className='grid grid-cols-[1fr_3px_1fr] overflow-hidden'
            style={{
              opacity: isGameInputFocused ? 1 : 0.25,
              filter: isGameInputFocused ? 'none' : 'blur(10px)',
            }}
          >
            <div className='relative mr-5 flex flex-row-reverse items-center'>
              {letterSequence.map((k, index) => (
                <div
                  key={k.key}
                  className='absolute transition'
                  style={{
                    transform: `translateX(${(100 + 25) * index * -1}px)`,
                  }}
                >
                  <KeyTile
                    keyInput={k.input}
                    viewState={index === 0 ? letterViewState : undefined}
                  />
                </div>
              ))}
            </div>

            <div className='dark:bg-d-text h-[200px] w-[3px] rounded-full bg-gray-200' />

            <div className='relative ml-5 flex items-center'>
              {arrowSequence.map((k, index) => (
                <div
                  key={k.key}
                  className='absolute transition'
                  style={{
                    transform: `translateX(${(100 + 25) * index}px)`,
                  }}
                >
                  <KeyTile
                    keyInput={k.input}
                    viewState={index === 0 ? arrowViewState : undefined}
                  />
                </div>
              ))}
            </div>
          </div>

          {!isGameInputFocused && (
            <div className='absolute inset-0 grid items-center justify-center dark:text-white'>
              Click here to focus
            </div>
          )}
        </div>

        <input
          type='type'
          className='absolute inset-0 opacity-0'
          ref={inputRef}
          onKeyDown={handleInput}
          onBlur={handleBlurGameInput}
          onFocus={handleFocusGameInput}
        />

        <ResetGameButton onClick={resetGame} className='relative z-10 mt-10' />

        <div className='my-6 flex w-full justify-center'>
          <ProgressBar.Split
            leftProgress={letterProgress}
            rightProgress={arrowProgress}
          />
        </div>
      </div>
    </div>
  )
}

export default SplitSequence

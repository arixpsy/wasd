import { useContext, useEffect, useRef } from 'react'
import KeyTile from '@/components/KeyTile'
import ProgressBar from '@/components/ProgressBar'
import ResetGameButton from '@/components/ResetGameButton'
import { GameConfigContext } from '@/context/useGameConfig'
import useSingleSequenceGame from '@/hooks/useSingleSequenceGame'

const SingleSequence = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { configOptions } = useContext(GameConfigContext)
  const {
    currentSet,
    currentSetIndex,
    handleBlurGameInput,
    handleFocusGameInput,
    handleInput,
    isGameInputFocused,
    keyTilesVisibleState,
    progress,
    resetGame,
    stopWatch: { time },
  } = useSingleSequenceGame(
    inputRef,
    configOptions.NUMBER_OF_KEYS,
    configOptions.NUMBER_OF_SETS,
    configOptions.KEY_TYPE
  )

  useEffect(() => handleFocusGameInput(), [handleFocusGameInput])

  return (
    <div className='relative grid h-full items-center'>
      <div className='flex flex-col items-center'>
        <div className='mb-10 text-center text-7xl dark:text-white'>{time}</div>
        <div className='relative flex w-full justify-center'>
          <div
            className='mx-auto grid items-center gap-6 transition-all'
            style={{
              gridTemplateColumns: `repeat(${configOptions.NUMBER_OF_KEYS}, 1fr)`,
              opacity: isGameInputFocused ? 1 : 0.25,
              filter: isGameInputFocused ? 'none' : 'blur(10px)',
            }}
            onClick={handleFocusGameInput}
          >
            {currentSet.map((k, index) => (
              <KeyTile
                key={`${currentSetIndex} ${k} ${index}`}
                keyInput={k}
                viewState={keyTilesVisibleState[index]}
              />
            ))}
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
        <div className='mt-10'>
          <ResetGameButton onClick={resetGame} className='relative z-10' />
        </div>
        <div className='my-6 flex w-full justify-center'>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  )
}

export default SingleSequence

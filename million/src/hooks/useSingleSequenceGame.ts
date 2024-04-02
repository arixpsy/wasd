import {
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useStopwatch from '@/hooks/useStopwatch'
import { GameInputs, GameState } from '@/types'
import {
  generatedRandomGameInput,
  getCurrentSet,
  isInputSequenceCorrect,
  newViewState,
} from '@/utils/functions/game'

const useSingleSequenceGame = (
  inputRef: React.RefObject<HTMLInputElement>,
  keys: number,
  sets: number
) => {
  // State
  const [gameState, setGameState] = useState<GameState>(GameState.READY)
  const [isGameInputFocused, setIsGameInputFocused] = useState<boolean>(false)
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false)
  const [sequence, setSequence] = useState<Array<GameInputs>>([])
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0)
  const [keyTilesVisibleState, setKeyTilesVisibleState] = useState<
    Array<boolean>
  >(newViewState(keys))
  const { start, stop, reset, time } = useStopwatch()

  // Derived State
  const currentSet = useMemo(
    () => getCurrentSet(sequence, currentSetIndex, keys),
    [currentSetIndex, sequence, keys]
  )

  // Functions
  const generateSequence = useCallback(() => {
    const sequenceSize = sets * keys
    const generatedSequences: Array<GameInputs> = []

    for (let i = 0; i < sequenceSize; i++) {
      generatedSequences.push(generatedRandomGameInput())
    }

    setCurrentSetIndex(0)
    setSequence(generatedSequences)
    setKeyTilesVisibleState(newViewState(keys))
  }, [keys, sets])

  const handleInput = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (!Object.values(GameInputs).includes(e.key as GameInputs)) return
      e.preventDefault()
      if (gameState === GameState.COMPLETED) return
      if (!inputRef.current) return
      if (isInputDisabled) return

      if (gameState === GameState.READY) {
        start()
        setGameState(GameState.RUNNING)
      }

      const currentInputs = inputRef.current.value
        ? inputRef.current.value.split(',')
        : []
      currentInputs.push(e.key)

      if (isInputSequenceCorrect(currentInputs, currentSet)) {
        setKeyTilesVisibleState((v) => v.fill(false, 0, currentInputs.length))
        inputRef.current.value = currentInputs.toString()

        if (currentInputs.length === keys && currentSetIndex + 1 === sets) {
          stop()
          setGameState(GameState.COMPLETED)
          inputRef.current.value = ''
        } else if (currentInputs.length % keys === 0) {
          inputRef.current.value = ''
          setIsInputDisabled(true)
          setTimeout(() => {
            setCurrentSetIndex((v) => v + 1)
            setKeyTilesVisibleState((currentViewState) =>
              currentViewState.fill(true)
            )
            setIsInputDisabled(false)
          }, 250)
        }
      } else {
        setIsInputDisabled(true)
        inputRef.current.value = ''
        setTimeout(() => {
          setKeyTilesVisibleState((v) => v.fill(true))
          setIsInputDisabled(false)
        }, 250)
      }
    },
    [
      currentSet,
      currentSetIndex,
      gameState,
      inputRef,
      keys,
      sets,
      start,
      stop,
      isInputDisabled,
    ]
  )

  const handleFocusGameInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      setIsGameInputFocused(true)
    }
  }, [inputRef])

  const handleBlurGameInput = () => setIsGameInputFocused(false)

  const resetGame = () => {
    reset()
    generateSequence()
    setGameState(GameState.READY)
    handleFocusGameInput()

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  // Side Effects
  useEffect(() => {
    generateSequence()
    if (inputRef.current) inputRef.current.value = ''
  }, [keys, sets, generateSequence, inputRef])

  return {
    currentSet,
    currentSetIndex,
    handleBlurGameInput,
    handleFocusGameInput,
    handleInput,
    isGameInputFocused,
    keyTilesVisibleState,
    resetGame,
    stopWatch: {
      time,
    },
  }
}

export default useSingleSequenceGame

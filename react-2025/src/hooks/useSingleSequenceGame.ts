import {
  type KeyboardEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useKeyLog from '@/hooks/useKeyLog'
import useStopwatch from '@/hooks/useStopwatch'
import {
  GameInputs,
  GameState,
  KeyTileViewState,
  KeyType,
} from '@/utils/constants/enums'
import {
  generatedRandomGameInput,
  getCurrentSet,
  isInputSequenceCorrect,
  newViewState,
  setNextKeyViewState,
} from '@/utils/functions/game'
import SoundContext from '@/context/useSound'

const useSingleSequenceGame = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  keys: number,
  sets: number,
  keyType: KeyType
) => {
  // State
  const [gameState, setGameState] = useState<GameState>(GameState.READY)
  const [isGameInputFocused, setIsGameInputFocused] = useState<boolean>(false)
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false)
  const [sequence, setSequence] = useState<Array<GameInputs>>([])
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0)
  const [keyTilesVisibleState, setKeyTilesVisibleState] = useState<
    Array<KeyTileViewState>
  >(newViewState(keys))
  const [percentProgress, setPercentProgress] = useState<number>(0)
  const { elapsedTime, start, stop, reset, time } = useStopwatch()
  const { keylogs, clearLogs, addLog } = useKeyLog()
  const { playKeySuccess } = useContext(SoundContext)

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
      generatedSequences.push(generatedRandomGameInput(keyType))
    }

    setCurrentSetIndex(0)
    setSequence(generatedSequences)
    setPercentProgress(0)
    setKeyTilesVisibleState(newViewState(keys))
  }, [keys, sets, keyType])

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
        playKeySuccess()
        addLog(e.key as GameInputs, true, elapsedTime)
        setKeyTilesVisibleState((v) =>
          setNextKeyViewState(
            v,
            currentInputs.length - 1,
            KeyTileViewState.CORRECT
          )
        )
        inputRef.current.value = currentInputs.toString()
        setPercentProgress(
          ((currentSetIndex * keys + currentInputs.length) / (keys * sets)) *
            100
        )

        if (currentInputs.length === keys && currentSetIndex + 1 === sets) {
          stop()
          setGameState(GameState.COMPLETED)
          inputRef.current.value = ''
        } else if (currentInputs.length === keys) {
          inputRef.current.value = ''
          setIsInputDisabled(true)
          setTimeout(() => {
            setCurrentSetIndex((v) => v + 1)
            setKeyTilesVisibleState(newViewState(keys))
            setIsInputDisabled(false)
          }, 250)
        }
      } else {
        addLog(e.key as GameInputs, false, elapsedTime)
        setIsInputDisabled(true)
        inputRef.current.value = ''
        setPercentProgress(((currentSetIndex * keys) / (keys * sets)) * 100)
        setKeyTilesVisibleState((v) =>
          setNextKeyViewState(
            v,
            currentInputs.length - 1,
            KeyTileViewState.WRONG
          )
        )

        setTimeout(() => {
          setKeyTilesVisibleState(newViewState(keys))
          setIsInputDisabled(false)
        }, 500)
      }
    },
    [
      addLog,
      currentSet,
      currentSetIndex,
      gameState,
      inputRef,
      keys,
      sets,
      start,
      stop,
      isInputDisabled,
      playKeySuccess,
      elapsedTime,
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
    clearLogs()

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  // Side Effects
  useEffect(() => {
    generateSequence()
    if (inputRef.current) inputRef.current.value = ''
  }, [keys, sets, keyType, generateSequence, inputRef])

  return {
    currentSet,
    currentSetIndex,
    gameState,
    handleBlurGameInput,
    handleFocusGameInput,
    handleInput,
    isGameInputFocused,
    keylogs,
    keyTilesVisibleState,
    progress: percentProgress,
    resetGame,
    stopWatch: {
      time,
    },
  }
}

export default useSingleSequenceGame

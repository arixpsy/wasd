import {
  type KeyboardEventHandler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import SoundContext from '@/context/useSound'
import useKeyLog from '@/hooks/useKeyLog'
import useStopwatch from '@/hooks/useStopwatch'
import {
  ArrowInputs,
  GameInputs,
  GameState,
  KeyTileViewState,
  KeyType,
  LetterInputs,
} from '@/utils/constants/enums'
import { generatedRandomGameInput } from '@/utils/functions/game'

const useSplitSequenceGame = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  keys: number
) => {
  const [gameState, setGameState] = useState<GameState>(GameState.READY)
  const [isGameInputFocused, setIsGameInputFocused] = useState<boolean>(false)
  const [isArrowInputDisabled, setIsArrowInputDisabled] =
    useState<boolean>(false)
  const [isLetterInputDisabled, setIsLetterInputDisabled] =
    useState<boolean>(false)
  const [arrowProgress, setArrowProgress] = useState<number>(0)
  const [letterProgress, setLetterProgress] = useState<number>(0)
  const [arrowSequence, setArrowSequence] = useState<
    Array<{ input: GameInputs; key: string }>
  >([])
  const [letterSequence, setLetterSequence] = useState<
    Array<{ input: GameInputs; key: string }>
  >([])
  const [arrowViewState, setArrowViewState] = useState<KeyTileViewState>(
    KeyTileViewState.DEFAULT
  )
  const [letterViewState, setLetterViewState] = useState<KeyTileViewState>(
    KeyTileViewState.DEFAULT
  )
  const { elapsedTime, start, stop, reset, time } = useStopwatch()
  const { addLog, keylogs, clearLogs } = useKeyLog()
  const { playKeySuccess } = useContext(SoundContext)

  const generateSequence = useCallback(() => {
    const letterSequence: Array<GameInputs> = []
    const arrowSequence: Array<GameInputs> = []

    for (let i = 0; i < keys; i++) {
      letterSequence.push(generatedRandomGameInput(KeyType.LETTERS))
      arrowSequence.push(generatedRandomGameInput(KeyType.ARROWS))
    }

    setLetterSequence(
      letterSequence.map((input, index) => ({ input, key: `letter${index}` }))
    )
    setArrowSequence(
      arrowSequence.map((input, index) => ({ input, key: `arrow${index}` }))
    )
    setArrowProgress(0)
    setLetterProgress(0)
    setArrowViewState(KeyTileViewState.DEFAULT)
    setLetterViewState(KeyTileViewState.DEFAULT)
  }, [keys])

  const handleInput = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (!Object.values(GameInputs).includes(e.key as GameInputs)) return
      e.preventDefault()
      if (gameState === GameState.COMPLETED) return
      if (!inputRef.current) return
      if (isArrowInputDisabled && isLetterInputDisabled) return

      if (gameState === GameState.READY) {
        start()
        setGameState(GameState.RUNNING)
      }

      let currentArrowSequence = arrowSequence
      let currentLetterSequence = letterSequence

      if (ArrowInputs.includes(e.key as ArrowInputs) && !isArrowInputDisabled) {
        if (arrowSequence[0].input === e.key) {
          currentArrowSequence = arrowSequence.slice(1)
          setArrowSequence(currentArrowSequence)
          setArrowProgress(((keys - currentArrowSequence.length) / keys) * 100)
          playKeySuccess()
          addLog(e.key as GameInputs, true, elapsedTime)
        } else {
          setIsArrowInputDisabled(true)
          setArrowViewState(KeyTileViewState.WRONG)
          addLog(e.key as GameInputs, false, elapsedTime)
          setTimeout(() => {
            setArrowViewState(KeyTileViewState.DEFAULT)
            setIsArrowInputDisabled(false)
          }, 250)
        }
      }

      if (
        LetterInputs.includes(e.key as LetterInputs) &&
        !isLetterInputDisabled
      ) {
        if (letterSequence[0].input === e.key) {
          currentLetterSequence = letterSequence.slice(1)
          setLetterSequence(currentLetterSequence)
          setLetterProgress(
            ((keys - currentLetterSequence.length) / keys) * 100
          )
          playKeySuccess()
          addLog(e.key as GameInputs, true, elapsedTime)
        } else {
          setIsLetterInputDisabled(true)
          setLetterViewState(KeyTileViewState.WRONG)
          addLog(e.key as GameInputs, false, elapsedTime)
          setTimeout(() => {
            setLetterViewState(KeyTileViewState.DEFAULT)
            setIsLetterInputDisabled(false)
          }, 250)
        }
      }

      if (
        currentArrowSequence.length === 0 &&
        currentLetterSequence.length === 0
      ) {
        stop()
        setGameState(GameState.COMPLETED)
      }
    },
    [
      addLog,
      elapsedTime,
      keys,
      gameState,
      inputRef,
      start,
      arrowSequence,
      letterSequence,
      setArrowProgress,
      setLetterProgress,
      isArrowInputDisabled,
      isLetterInputDisabled,
      playKeySuccess,
      stop,
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
  }

  // Side Effects
  useEffect(() => {
    generateSequence()
  }, [keys, generateSequence, inputRef])

  return {
    keylogs,
    gameState,
    isGameInputFocused,
    arrowProgress,
    letterProgress,
    arrowViewState,
    letterViewState,
    arrowSequence,
    letterSequence,
    handleBlurGameInput,
    handleFocusGameInput,
    handleInput,
    resetGame,
    stopWatch: {
      time,
    },
  }
}

export default useSplitSequenceGame

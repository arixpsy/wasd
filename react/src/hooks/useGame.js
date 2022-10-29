import { useState, useEffect } from 'react'
import useStopWatch from './useStopWatch'
import _ from 'lodash'

const INPUTS = Object.freeze({
  ARROW: ['up', 'down', 'left', 'right'],
  LETTER: ['w', 'a', 's', 'd']
})

const VALID_KEYS = {
  87: 'w',
  65: 'a',
  83: 's',
  68: 'd',
  38: 'up',
  40: 'down',
  37: 'left',
  39: 'right'
}

const GAME_STATE = {
  NEW: 'new',
  RUNNING: 'running',
  END: 'end',
}

const useGame = () => {
  const [generateCount, setGenerateCount] = useState(20)
  const [letterSequence, setLetterSequence] = useState([])
  const [arrowSequence, setArrowSequence] = useState([])
  const { elapsedTime, startStopWatch, stopStopWatch, resetStopWatch } = useStopWatch()
  const [progress, setProgress] = useState({ arrow: 0, letter: 0 })
  const [gameState, setGameState] = useState(GAME_STATE.NEW)
  const [letterLog, setLetterLogs] = useState([])
  const [arrowLog, setArrowLogs] = useState([])

  // Generate new sequence 
  const generateSequence = () => {
    let sequenceArrow = []
    let sequenceLetter = []

    for (let i = 0; i < generateCount; i++) {
      sequenceArrow.push({key: `arrow${i}`, input: INPUTS.ARROW[_.random(3)]})
      sequenceLetter.push({key: `letter${i}`, input: INPUTS.LETTER[_.random(3)]})
    }

    setArrowSequence(sequenceArrow)
    setLetterSequence(sequenceLetter)
  }


  // Handle correct wasd⬆⬇⬅➡ inputs
  const gameButtonPress = (keyCode) => {
    if (Object.keys(VALID_KEYS).includes(keyCode.toString())) {

      if (gameState === GAME_STATE.NEW) {
        startStopWatch()
        setGameState(GAME_STATE.RUNNING)
      }

      let enteredKey = VALID_KEYS[keyCode]

      if (arrowSequence.length > 0) {
        if (arrowSequence[0].input === enteredKey) {
          setArrowSequence(arrowSequence.slice(1))
          logInput(enteredKey, 'arrow', true)
          return true
        } else if (INPUTS.ARROW.includes(enteredKey)) {
          logInput(enteredKey, 'arrow', false)
          return false
        }
      }

      if (letterSequence.length > 0) {
        if (letterSequence[0].input === enteredKey) {
          setLetterSequence(letterSequence.slice(1))
          logInput(enteredKey, 'letter', true)
          return true
        } else if (INPUTS.LETTER.includes(enteredKey)) {
          logInput(enteredKey, 'letter', false)
          return false
        }
        
      }
      return false
    }
  }


  // Check for game end
  useEffect(() => {
    if (arrowSequence.length === 0 && letterSequence.length === 0 && gameState !== 'new') {
      stopStopWatch()
      setGameState(GAME_STATE.END)
    }
  }, [letterSequence, arrowSequence, stopStopWatch, gameState])

  // Handle reset game
  const resetGame = () => {
    setGameState(GAME_STATE.NEW)
    stopStopWatch()
    resetStopWatch()
    generateSequence()
    setLetterLogs([])
    setArrowLogs([])
  }

  // Update game progress on successful key input
  useEffect(() => {
    const arrowCount = arrowSequence.length
    const letterCount = letterSequence.length
    setProgress({
      arrow: (generateCount - arrowCount) / generateCount,
      letter: (generateCount - letterCount) / generateCount
    })
  },[letterSequence, arrowSequence, setProgress, generateCount])

  // Log User Input
  const logInput = (key, type, wasCorrect) => {
    const newLog = {
      key,
      type,
      timePressed: elapsedTime,
      correct: wasCorrect
    }
    if (INPUTS.LETTER.includes(key)) {
      setLetterLogs([...letterLog, newLog])
    } else if (INPUTS.ARROW.includes(key)) {
      setArrowLogs([...arrowLog, newLog])
    }
  }

  return {
    resetGame: () => resetGame(),
    sequence: {
      letters: letterSequence,
      arrows: arrowSequence
    },
    generateSequence: () => generateSequence(),
    generateCount,
    changeGenerateCount: (number) => setGenerateCount(number),
    insertInput: (keyCode) => gameButtonPress(keyCode),
    gameState,
    progress,
    logs: {
      letterLog,
      arrowLog
    },
    stopWatch: {
      time: elapsedTime,
      start: () => startStopWatch,
      stop: () => stopStopWatch,
      reset: () => resetStopWatch
    }
  }
}

export default useGame;
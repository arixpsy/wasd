import { useState, useEffect } from 'react'
import useStopWatch from './useStopWatch'
import _ from 'lodash'

const GENERATE_COUNT = 20

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

const useGame = () => {
  const [letterSequence, setLetterSequence] = useState([])
  const [arrowSequence, setArrowSequence] = useState([])
  const { elapsedTime, startStopWatch, stopStopWatch, resetStopWatch} = useStopWatch()
  const [progress, setProgress] = useState(0)
  // const [gameState, setGameState] = useState('create')

  // Generate new sequence 
  const generateSequence = () => {
    let sequenceArrow = []
    let sequenceLetter = []
    for (let i = 0; i < GENERATE_COUNT; i++) {
      sequenceArrow.push({key: `arrow${i}`, input: INPUTS.ARROW[_.random(3)]})
      sequenceLetter.push({key: `letter${i}`, input: INPUTS.LETTER[_.random(3)]})
    }
    setArrowSequence(sequenceArrow)
    setLetterSequence(sequenceLetter)
  }


  // Handle correct wasd⬆⬇⬅➡ inputs
  const gameButtonPress = (keyCode) => {
    if (Object.keys(VALID_KEYS).includes(keyCode.toString())) {
      startStopWatch()
      let enteredKey = VALID_KEYS[keyCode]
      if (arrowSequence.length > 0 && arrowSequence[0].input === enteredKey) {
        setArrowSequence(arrowSequence.slice(1))
        return true
      }
      if (letterSequence.length > 0 && letterSequence[0].input === enteredKey) {
        setLetterSequence(letterSequence.slice(1))
        return true
      }
      return false
    }
  }


  // Check for game end
  useEffect(() => {
    if (arrowSequence.length === 0 && letterSequence.length === 0){
      stopStopWatch()
    }
  }, [letterSequence, arrowSequence, stopStopWatch])

  // Handle reset game
  const resetGame = () => {
    resetStopWatch()
    generateSequence()
  }

  // Update game progress on successful key input
  useEffect(()=> {

  },[letterSequence, arrowSequence, setProgress])

  return {
    resetGame: () => resetGame(),
    generateSequence: () => generateSequence(),
    sequence: {
      letters: letterSequence,
      arrows: arrowSequence
    },
    insertInput: (keyCode) => gameButtonPress(keyCode),
    progress,
    stopWatch: {
      time: elapsedTime,
      start: () => startStopWatch,
      stop: () => stopStopWatch,
      reset: () => resetStopWatch
    }
  }
}

export default useGame;
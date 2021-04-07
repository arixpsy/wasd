import { useState, useEffect } from 'react'
import useStopWatch from './useStopWatch'
import _ from 'lodash'

const GENERATE_COUNT = 20
const INPUTS = Object.freeze({
  ARROW: ['up', 'down', 'left', 'right'],
  LETTER: ['w', 'a', 's', 'd']
})
const validKeyCode = {
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
  const { elapsedTime, startStopWatch, stopStopWatch, resetStopWatch, isRunning } = useStopWatch()
  // const [progress, setProgress] = useState(0)
  const [gameState, setGameState] = useState('create')

  const generateAllSequence = () => {
    let sequenceArrow = []
    let sequenceLetter = []
    for (let i = 0; i < GENERATE_COUNT; i++) {
      sequenceArrow.push({key: `arrow${i}`, input: INPUTS.ARROW[_.random(3)]})
      sequenceLetter.push({key: `letter${i}`, input: INPUTS.LETTER[_.random(3)]})
    }
    setArrowSequence(sequenceArrow)
    setLetterSequence(sequenceLetter)
  }

  const gameButtonPress = (keyCode) => {
    if (Object.keys(validKeyCode).includes(keyCode.toString())) {
      startStopWatch()
      let enterKey = validKeyCode[keyCode]
      if (arrowSequence.length > 0 && arrowSequence[0].input === enterKey) {
        setArrowSequence(arrowSequence.slice(1))
        return true
      }
      if (letterSequence.length > 0 && letterSequence[0].input === enterKey) {
        setLetterSequence(letterSequence.slice(1))
        return true
      }
      return false
    }
  }

  useEffect(() => {
    if (arrowSequence.length === 0 && letterSequence.length === 0){
      stopStopWatch()
    }
  }, [letterSequence, arrowSequence])

  return {
    generateSequence: () => generateAllSequence(),
    sequence: {
      letter: {
        get: letterSequence,
        set: (input) => setLetterSequence(input)
      },
      arrow: {
        get: arrowSequence,
        set: (input) => setArrowSequence(input)
      }
    },
    insertInput: (keyCode) => gameButtonPress(keyCode),
    stopWatch: {
      time: elapsedTime,
      start: () => startStopWatch,
      stop: () => stopStopWatch,
      reset: () => resetStopWatch
    }
  }
}

export default useGame;
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

const useGame = () => {
  const [generateCount, setGenerateCount] = useState(20)
  const [letterSequence, setLetterSequence] = useState([])
  const [arrowSequence, setArrowSequence] = useState([])
  const { elapsedTime, startStopWatch, stopStopWatch, resetStopWatch} = useStopWatch()
  const [progress, setProgress] = useState({ arrow: 0, letter: 0 })
  // const [gameState, setGameState] = useState('create')

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
    stopStopWatch()
    resetStopWatch()
    generateSequence()
  }

  // Update game progress on successful key input
  useEffect(()=> {
    const arrowCount = arrowSequence.length
    const letterCount = letterSequence.length
    setProgress({
      arrow: (generateCount - arrowCount) / generateCount,
      letter: (generateCount - letterCount) / generateCount
    })
  },[letterSequence, arrowSequence, setProgress, generateCount])

  return {
    resetGame: () => resetGame(),
    generateSequence: () => generateSequence(),
    sequence: {
      letters: letterSequence,
      arrows: arrowSequence
    },
    changeGenerateCount: (number) => setGenerateCount(number),
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
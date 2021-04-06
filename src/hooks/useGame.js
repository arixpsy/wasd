import { useState } from 'react'
import _ from 'lodash'

const GENERATE_COUNT = 10
const INPUTS = Object.freeze({
  ARROW: ['up', 'down', 'left', 'right'],
  LETTER: ['w', 'a', 's', 'd']
})

const useGame = () => {
  const [letterSequence, setLetterSequence] = useState([])
  const [arrowSequence, setArrowSequence] = useState([])
  // const [progress, setProgress] = useState(0)

  const generateAllSequence = () => {
    let sequenceArrow = []
    let sequenceLetter = []
    for (let i = 0; i < GENERATE_COUNT; i++) {
      sequenceArrow.push(INPUTS.ARROW[_.random(3)])
      sequenceLetter.push(INPUTS.LETTER[_.random(3)])
    }
    setArrowSequence(sequenceArrow)
    setLetterSequence(sequenceLetter)
  }

  return {
    generateSequence: () => generateAllSequence(),
    sequence: {
      letter: {
        get: letterSequence,
        set: (input) => setLetterSequence()
      },
      arrow: {
        get: arrowSequence,
        set: (input) => setArrowSequence()
      }
    }
  }
}

export default useGame;
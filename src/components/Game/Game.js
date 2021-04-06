import React, { useEffect } from 'react'
import styled from 'styled-components'
import useGame from './../../hooks/useGame'

const Console = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`
const ViewSplittor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Game = () => {
  const { sequence, generateSequence } = useGame()
  useEffect(() => {
    generateSequence()
    // add button listener
    // add timer on start
    // stop timer on complete
  }, [])

  console.log(sequence)

  return (
    <Console>
      <ViewSplittor>
        <div>{sequence.letter.get}</div>
        <div>{sequence.arrow.get}</div>
      </ViewSplittor>
      <div>Progress</div>
    </Console>
  )
}

export default Game
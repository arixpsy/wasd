import React, { useEffect } from 'react'
import styled from 'styled-components'
import useGame from './../../hooks/useGame'
import Cell from './Cell/Cell'

const Console = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
`
const ViewSplittor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  width: 100%;
  max-width: calc(1000px - calc(2 * var(--default-padding)));
`
const View = styled.div`
  align-items: center;
  justify-content: ${props => (props.isLeft ? 'flex-end' : 'flex-start')};
  text-align: left;
  width: max-content;
  overflow-x: hidden;
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
        <View isLeft={true}>
          {sequence.letter.get.map(item => <Cell character={item} />)}
        </View>
        <View isLeft={false}>
          {sequence.arrow.get.map(item => <Cell character={item} />)}
        </View>
      </ViewSplittor>
      <div>Progress</div>
    </Console>
  )
}

export default Game
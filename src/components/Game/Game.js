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
  grid-template-columns: 50% 3px 50%;
  width: 100%;
  max-width: calc(1000px - calc(2 * var(--default-padding)));
  align-items: center;
`
const VerticalBorder = styled.div`
  background-color: var(--color-text-main);
  height: 50%;
  border-radius: 5px;
  opacity: 0.25;
`
const View = styled.div`
  width: 100%;
  position: relative;
`

const Game = () => {
  const { sequence, generateSequence } = useGame()
  useEffect(() => {
    generateSequence()
    // add button listener
    // add timer on start
    // stop timer on complete

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Console>
      <ViewSplittor>
        <View isLeft={true}>
          {sequence.letter.get.map(item => <Cell character={item} isLeft={true} />)}
        </View>
        <VerticalBorder />
        <View isLeft={false}>
          {sequence.arrow.get.map(item => <Cell character={item} isLeft={false} />)}
        </View>
      </ViewSplittor>
      <div>Progress</div>
    </Console>
  )
}

export default Game
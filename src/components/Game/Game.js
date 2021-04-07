import React, { useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'
import useGame from './../../hooks/useGame'
import Cell from './Cell/Cell'
import ProgressBar from './ProgressBar/ProgressBar'

const Console = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  justify-items: center;
`
const ViewSplittor = styled.div`
  display: grid;
  grid-template-columns: 50% 3px 50%;
  width: 100%;
  max-width: calc(1000px - calc(2 * var(--default-padding)));
  align-items: center;
  overflow: hidden;
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
  & > *:nth-child(1) {
    transform: translateX(0) scale(1);
    filter: brightness(1);
  }
`
const generateCellStyles = (isLeft) => {
  let styles = ""

  for (let i = 2; i < 30; i++) {
    styles += `
      & > *:nth-child(${i}) {
        transform: translateX(${isLeft ? (-1 * 100 * (i - 1)) : (100 * (i - 1))}px) scale(0.6);
        filter: brightness(0.8);
      }
    `
  }
  return css`${styles}`
}

const LeftView = styled(View)`
  ${generateCellStyles(true)};
`
const RightView = styled(View)`
  ${generateCellStyles(false)};
`
const StopWatch = styled.div`
  display: grid;
  place-items: center;
  font-size: 5rem;
  color: var(--color-text-main);
`
const Game = () => {
  const { sequence, generateSequence, insertInput, stopWatch } = useGame()
  useEffect(() => {
    generateSequence()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUserKeyPress = (event) => {
    insertInput(event.keyCode)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Console>
      <StopWatch>
        { stopWatch.time.toFixed(2) }
      </StopWatch>
      <ViewSplittor>
        <LeftView left={true}>
          {sequence.letter.get.map(item => <Cell key={item.key} character={item.input} left={true} />)}
        </LeftView>
        <VerticalBorder />
        <RightView left={false}>
          {sequence.arrow.get.map(item => <Cell key={item.key} character={item.input} left={false} />)}
        </RightView>
      </ViewSplittor>
      <ProgressBar />
    </Console>
  )
}

export default Game
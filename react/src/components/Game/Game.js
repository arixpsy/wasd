import React, { useEffect, useCallback, useRef } from 'react'
import useGame from './../../hooks/useGame'
import Cell from './Cell/Cell'
import ProgressBar from './ProgressBar/ProgressBar'
import Result from './Result/Result'
import { Console, StopWatch, ViewSplittor, LeftView, RightView, VerticalBorder, ResetButton } from './style'
import { BsArrowRepeat } from 'react-icons/bs'

const Game = () => {
  const { 
    sequence,
    generateSequence,
    insertInput,
    stopWatch,
    resetGame,
    progress,
    gameState,
    logs,
    generateCount
  } = useGame()

  const ResetButtonRef = useRef();

  useEffect(() => {
    generateSequence()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUserKeyPress = useCallback((event) => {
    if(event.keyCode === 9) {
      event.preventDefault()
      ResetButtonRef.current.focus()
    } else {
      insertInput(event.keyCode)
    }
  },[insertInput])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const resetButtonHandler = () => {
    resetGame()
    document.activeElement.blur()
  }

  return (
    <Console>
      { gameState !== 'end' ?
        <>
          <StopWatch>
            { stopWatch.time.toFixed(2) }
          </StopWatch>
          <ViewSplittor>
            <LeftView>
              {sequence.letters.map(item => <Cell key={item.key} character={item.input} left={true} />)}
            </LeftView>
            <VerticalBorder />
            <RightView>
              {sequence.arrows.map(item => <Cell key={item.key} character={item.input} left={false} />)}
            </RightView>
          </ViewSplittor>
          <ResetButton onClick={resetButtonHandler} ref={ResetButtonRef}><BsArrowRepeat /></ResetButton>
          <ProgressBar progress={progress}/>
        </> 
      :
        <Result logs={logs} stopWatch={stopWatch} generateCount={generateCount}>
          <ResetButton onClick={resetButtonHandler} ref={ResetButtonRef}><BsArrowRepeat /></ResetButton>
        </Result>
      }
    </Console>
  )
}

export default Game
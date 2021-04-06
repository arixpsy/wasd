import React, { useEffect } from 'react'
import styled from 'styled-components'

const Console = styled.div`

`

const ViewSplittor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Game = () => {
  
  useEffect(() => {
    // generate game input
    // add button listener
    // add timer on start
    // stop timer on complete
  }, [])

  return (
    <Console>
      <ViewSplittor>
        <div>Hello</div>
        <div>Hello</div>
      </ViewSplittor>
      <div>Progress</div>
    </Console>
  )
}

export default Game
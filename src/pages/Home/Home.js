import React from 'react'
import styled from 'styled-components'
import PageContainer from './../../components/common/PageContainer/PageContainer'
import PageFooter from './../../components/common/PageFooter/PageFooter'
import Game from './../../components/Game/Game'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: calc(100vh - calc(2 * var(--default-padding)));
  gap: 2rem;
`

const Home = () => {
  return (
    <PageContainer>
      <GridContainer>
        <h1>WASD</h1>
        <Game />
        <PageFooter />
      </GridContainer>
    </PageContainer>
  )
}

export default Home
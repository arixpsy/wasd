import React from 'react'
import styled from 'styled-components'
import PageContainer from './../../components/common/PageContainer/PageContainer'
import PageFooter from './../../components/common/PageFooter/PageFooter'
import PageHeader from './../../components/common/PageHeader/PageHeader'
import Game from './../../components/Game/Game'


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: calc(100vh - calc(2 * var(--default-padding)));
  gap: 2rem;
  width: 100%;
`

const Home = () => {
  return (
    <PageContainer>
      <GridContainer>
        <PageHeader />
        <Game />
        <PageFooter />
      </GridContainer>
    </PageContainer>
  )
}

export default Home
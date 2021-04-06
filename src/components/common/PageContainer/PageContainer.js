import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: var(--default-padding);
`

const PageContainer = ({ children }) => {
  return <Container>
    { children }
  </Container>
}

export default PageContainer
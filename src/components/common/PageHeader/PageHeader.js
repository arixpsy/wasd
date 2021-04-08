import styled from 'styled-components'
import { FaArrowsAlt } from 'react-icons/fa'

const Header = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-main);

  & > h1 {
    margin-left: 0.5rem;
  }
`

const PageHeader = () => {
  return <Header>
    <FaArrowsAlt size={30} />
    <h1>WASD</h1>
  </Header>
}

export default PageHeader
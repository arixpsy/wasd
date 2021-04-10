import styled from 'styled-components'
import { ImArrowUp, ImArrowDown, ImArrowLeft, ImArrowRight } from "react-icons/im";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (
    props.character === 'up' || props.character === 'w' ? 'var(--color-primary)'
    : props.character === 'left' || props.character === 'a'  ? 'var(--color-secondary)'
    : props.character === 'down' || props.character === 's'  ? 'var(--color-tertiary)'
    : 'var(--color-quaternary)'
  )};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  position: absolute;
  left: ${props => (
    props.left ? '70%' : 'calc(30% - 100px)'
  )};
  top: calc(50% - 50px);
  color: var(--color-background-main);
  text-transform: capitalize;
  font-weight: bold;
  transition: transform ease 0.25s;
`

const Cell = ({ character, left }) => {
  return (
    <>
    <Circle character={character} left={left}>{ 
      character === 'up' ? <ImArrowUp /> : 
      character === 'down' ? <ImArrowDown /> : 
      character === 'left' ? <ImArrowLeft /> : 
      character === 'right' ? <ImArrowRight /> : 
      character
    }</Circle>
    {left}
    </>
  )
}

export default Cell
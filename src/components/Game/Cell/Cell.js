import styled from 'styled-components'
import { ImArrowUp, ImArrowDown, ImArrowLeft, ImArrowRight } from "react-icons/im";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (
    props.character === 'up' || props.character === 'w' ? 'var(--color-primary)'
    : props.character === 'down' || props.character === 's'  ? 'var(--color-secondary)'
    : props.character === 'left' || props.character === 'a'  ? 'var(--color-tertiary)'
    : 'var(--color-quaternary)'
  )};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  position: absolute;
  left: ${props => (
    props.isLeft ? '70%' : 'calc(30% - 100px)'
  )};
  top: calc(50% - 50px);
  color: var(--color-background-main);
  text-transform: capitalize;
  font-weight: bold;
`

const Cell = ({ character, isLeft }) => {
  return (
    <Circle character={character} isLeft={isLeft}>{ 
      character === 'up' ? <ImArrowUp /> : 
      character === 'down' ? <ImArrowDown /> : 
      character === 'left' ? <ImArrowLeft /> : 
      character === 'right' ? <ImArrowRight /> : 
      character
    }</Circle>
  )
}

export default Cell

// div > * &:nth-child(2){
//   transform: translateX(120px)
// }

// div > * &:nth-child(3){
//   transform: translateX(120px)
// }

// div > * &:nth-child(4){
//   transform: translateX(120px)
// }

// div > * &:nth-child(5){
//   transform: translateX(120px)
// }

// div > * &:nth-child(6){
//   transform: translateX(120px)
// }

// div > * &:nth-child(7){
//   transform: translateX(120px)
// }

// div > * &:nth-child(8){
//   transform: translateX(120px)
// }

// div > * &:nth-child(9){
//   transform: translateX(120px)
// }

// div > * &:nth-child(10){
//   transform: translateX(120px)
// }
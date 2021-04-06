import styled from 'styled-components'

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`

const Cell = ({ character }) => {
  return (
    <Circle>
      { character }
    </Circle>
  )
}

export default Cell
import styled from 'styled-components'

const ProgressBarComponent = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--color-text-main);
  opacity: 0.25;
  height: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ProgressBar = ({ progress }) => {
  return <ProgressBarComponent>

  </ProgressBarComponent>
}

export default ProgressBar
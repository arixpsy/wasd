import styled from 'styled-components'

const ProgressBarComponent = styled.div`
  width: 100%;
  max-width: 500px;
  height: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  position: relative;
`
const IndividualBackground = styled.div`
  width: 100%;
  background-color: var(--color-text-main);
  filter: brightness(2.5);
`
const IndividualProgress = styled.div`
  position: absolute;
  width: 50%;
  height: 10px;
  ${props => (
    props.side === 'right' ? 'right: 0'
    : 'left: 0'
  )};

  &:before {
    position: absolute;
    ${props => (
      props.side === 'right' ? 'left: 0'
      : 'right: 0'
    )};
    content: '';
    width: ${props => (
      `${props.progress * 100}%`
    )};
    transition: width 0.2s ease;
    height: 10px;
    background-color: var(--color-tertiary);
  }
`

const ProgressBar = ({ progress }) => {
  return <ProgressBarComponent>
    <IndividualBackground />
    <IndividualBackground />
    <IndividualProgress side="left" progress={progress.letter}/>
    <IndividualProgress side="right" progress={progress.arrow}/>
  </ProgressBarComponent>
}

export default ProgressBar
import styled, { css } from 'styled-components'

export  const Console = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  width: 100%;
  justify-items: center;
`
export const ViewSplittor = styled.div`
  display: grid;
  grid-template-columns: 50% 3px 50%;
  width: 100%;
  max-width: calc(1000px - calc(2 * var(--default-padding)));
  align-items: center;
  overflow: hidden;
`
export const VerticalBorder = styled.div`
  background-color: var(--color-text-main);
  height: 50%;
  border-radius: 5px;
  opacity: 0.25;
`
export const View = styled.div`
  width: 100%;
  position: relative;
  & > *:nth-child(1) {
    transform: translateX(0) scale(1);
    filter: brightness(1);
  }
`
const generateCellStyles = (isLeft) => {
  let styles = ""

  for (let i = 2; i < 30; i++) {
    styles += `
      & > *:nth-child(${i}) {
        transform: translateX(${isLeft ? (-1 * 100 * (i - 1)) : (100 * (i - 1))}px) scale(0.6);
        filter: brightness(0.8);
      }
    `
  }
  return css`${styles}`
}

export const LeftView = styled(View)`
  ${generateCellStyles(true)};
`
export const RightView = styled(View)`
  ${generateCellStyles(false)};
`
export const StopWatch = styled.div`
  display: grid;
  place-items: center;
  font-size: 5rem;
  color: var(--color-text-main);
`

export const ResetButton = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1.2rem;
  display: grid;
  place-items: center;
  font-size: 1.75rem;
  color: var(--color-text-main);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  transition: all ease 0.2s;
  
  &:hover , &:focus {
    background: var(--color-text-main);
    color: var(--color-background-main);
    filter: brightness(2.5);
  }
`
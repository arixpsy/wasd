import React from 'react'
import styled from 'styled-components'
import DarkModeButton from './../DarkModeButton/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
const Credits = styled.div``

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Text = styled.p`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  place-items: center;
  gap: var(--default-grid-gap);
`

const PageFooter = () => {
  return (
    <Footer>
      <Credits>
        <Text><AiOutlineCode />Developed by <a href="#">Arix</a></Text>
        <Text><FaCode />Source code on <a href="#">Github</a></Text>
      </Credits>
      <Options>
        <DarkModeButton />
      </Options>
    </Footer>
  )
}

export default PageFooter
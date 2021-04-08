import React from 'react'
import { CgDarkMode } from 'react-icons/cg'
import styled from 'styled-components'

const DarkButton = styled.button`
  display: flex;
  outline: none;
  background: none;
  font-size: 2rem;
  color: var(--color-text-main);
  border: none;
  cursor: pointer;
`


export default function DarkModeButton() {
  const toggleDarkMode = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light");
      let theme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", theme);
    } else {
      document.body.classList.toggle("dark");
      let theme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }
  }
  return <DarkButton tabIndex="-1" onClick={toggleDarkMode}><CgDarkMode /></DarkButton>
}

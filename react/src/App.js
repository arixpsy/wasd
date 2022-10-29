import React, { useEffect } from 'react'
import Home from './pages/Home/Home'

export default function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.toggle("dark");
    } else if (currentTheme === "light") {
      document.body.classList.toggle("light");
    }
  }, [])
  
  return (
    <>
      <Home />
    </>
  )
}

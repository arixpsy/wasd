import { type PropsWithChildren, useEffect, useState } from 'react'
import DarkModeContext from '@/context/useDarkMode'
import {
  enableDarkMode as enable,
  disableDarkMode as disable,
  resetTheme as reset,
  toggleDarkMode as toggle,
  setDarkMode,
} from '@/utils/functions/darkMode'

const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [toggleCount, setToggleCount] = useState(0)

  const enableDarkMode = () => {
    enable()
    setToggleCount((c) => c + 1)
  }

  const disableDarkMode = () => {
    disable()
    setToggleCount((c) => c + 1)
  }

  const resetTheme = () => {
    reset()
    setToggleCount((c) => c + 1)
  }

  const toggleDarkMode = () => {
    toggle()
    setToggleCount((c) => c + 1)
  }

  useEffect(() => {
    setDarkMode()
  }, [])

  return (
    <DarkModeContext.Provider
      value={{
        enableDarkMode,
        disableDarkMode,
        toggleDarkMode,
        resetTheme,
        toggleCount,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider

import { type PropsWithChildren, useEffect } from 'react'
import DarkModeContext from '@/context/useDarkMode'
import {
  enableDarkMode,
  disableDarkMode,
  resetTheme,
  toggleDarkMode,
  setDarkMode,
} from '@/utils/functions/darkMode'

const DarkModeProvider = ({ children }: PropsWithChildren) => {
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
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider

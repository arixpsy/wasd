import { PropsWithChildren, createContext, useEffect } from 'react'
import {
  enableDarkMode,
  disableDarkMode,
  resetTheme,
  toggleDarkMode,
  setDarkMode,
} from '@/utils/functions/darkMode'

type DarkModeContext = {
  enableDarkMode: () => void
  disableDarkMode: () => void
  toggleDarkMode: () => void
  resetTheme: () => void
}

export const DarkModeContext = createContext<DarkModeContext>({
  enableDarkMode,
  disableDarkMode,
  toggleDarkMode,
  resetTheme,
})

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

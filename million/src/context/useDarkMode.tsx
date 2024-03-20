import { PropsWithChildren, createContext } from 'react'
import {
  enableDarkMode,
  disableDarkMode,
  resetTheme,
  toggleDarkMode,
} from '@/utils/functions/darkmode'

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

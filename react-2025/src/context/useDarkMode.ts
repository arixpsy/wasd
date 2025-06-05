import { createContext } from 'react'
import {
  enableDarkMode,
  disableDarkMode,
  resetTheme,
  toggleDarkMode,
} from '@/utils/functions/darkMode'

type DarkModeContext = {
  enableDarkMode: () => void
  disableDarkMode: () => void
  toggleDarkMode: () => void
  resetTheme: () => void
}

const DarkModeContext = createContext<DarkModeContext>({
  enableDarkMode,
  disableDarkMode,
  toggleDarkMode,
  resetTheme,
})

export default DarkModeContext

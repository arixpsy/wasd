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
  toggleCount: number
}

const DarkModeContext = createContext<DarkModeContext>({
  enableDarkMode,
  disableDarkMode,
  toggleDarkMode,
  resetTheme,
  toggleCount: 0,
})

export default DarkModeContext

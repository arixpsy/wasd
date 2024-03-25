import DarkModeProvider from '@/context/useDarkMode'
import GameConfigProvider from '@/context/useGameConfig'
import Home from '@/view/Home'

const App = () => {
  return (
    <DarkModeProvider>
      <GameConfigProvider>
        <Home />
      </GameConfigProvider>
    </DarkModeProvider>
  )
}

export default App

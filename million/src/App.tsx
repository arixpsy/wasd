import DarkModeProvider from '@/context/useDarkMode'
import GameConfigProvider from '@/context/useGameConfig'
import SoundProvider from '@/context/useSound'
import Home from '@/routes/Home'

const App = () => {
  return (
    <DarkModeProvider>
      <SoundProvider>
        <GameConfigProvider>
          <Home />
        </GameConfigProvider>
      </SoundProvider>
    </DarkModeProvider>
  )
}

export default App

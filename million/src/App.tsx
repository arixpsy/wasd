import DarkModeProvider from '@/context/useDarkMode'
import Home from '@/view/Home'

const App = () => {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  )
}

export default App

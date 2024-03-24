import { useContext } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import IconButton from '@/components/IconButton'
import { DarkModeContext } from '@/context/useDarkMode'

const DarkModeButton = () => {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return (
    <IconButton onClick={toggleDarkMode}>
      <CgDarkMode />
    </IconButton>
  )
}

export default DarkModeButton

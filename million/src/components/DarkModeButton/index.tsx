import { useContext } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import { DarkModeContext } from '@/context/useDarkMode'

const DarkModeButton = () => {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button
      onClick={toggleDarkMode}
      className='outline-gray-300 hover:bg-gray-300 dark:text-d-text rounded-lg p-1 text-3xl transition-colors dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
    >
      <CgDarkMode className='text-3xl' />
    </button>
  )
}

export default DarkModeButton

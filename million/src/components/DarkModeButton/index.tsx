import { useContext } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import { DarkModeContext } from '@/context/useDarkMode'

const DarkModeButton = () => {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button
      onClick={toggleDarkMode}
      className='rounded-lg p-1 text-3xl outline-gray-300 transition-colors hover:bg-gray-300 dark:text-gray-400 dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
    >
      <CgDarkMode className='text-3xl' />
    </button>
  )
}

export default DarkModeButton

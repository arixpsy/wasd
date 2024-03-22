import { useContext } from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import { CgDarkMode } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa'
import { DarkModeContext } from '@/context/useDarkMode'

const Footer = () => {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return (
    <div className='flex justify-between'>
      <div>
        <p className='flex items-center gap-3'>
          <AiOutlineCode />
          Developed by{' '}
          <a href='https://github.com/arixpsy' className='hover:underline underline-offset-4' tabIndex={-1}>
            Arix
          </a>
        </p>
        <p className='flex items-center gap-3'>
          <FaCode />
          Source code on{' '}
          <a href='https://github.com/arixpsy/wasd' className='hover:underline underline-offset-4' tabIndex={-1}>
            Github
          </a>
        </p>
      </div>
      <div className='flex justify-end'>
        <button onClick={toggleDarkMode}>
          <CgDarkMode className='text-3xl' />
        </button>
      </div>
    </div>
  )
}

export default Footer

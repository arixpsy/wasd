import DarkModeButton from '@/components/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-3'>
          <AiOutlineCode />
          <p>
            Developed by
            <a
              href='https://github.com/arixpsy'
              className='outline-gray-300 hover:bg-gray-300 dark:text-d-text ml-1 rounded-lg px-1.5 py-0.5 transition-colors dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
            >
              Arix
            </a>
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <FaCode />
          <p>
            Source code on
            <a
              href='https://github.com/arixpsy/wasd'
              className='outline-gray-300 hover:bg-gray-300 dark:text-d-text ml-1 rounded-lg px-1.5 py-0.5 transition-colors dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
            >
              Github
            </a>
          </p>
        </div>
      </div>

      <DarkModeButton />
    </div>
  )
}

export default Footer

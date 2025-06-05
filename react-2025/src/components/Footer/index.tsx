import DarkModeButton from '@/components/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between text-sm'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-3'>
          <AiOutlineCode />
          <p>
            Developed by
            <a
              href='https://github.com/arixpsy'
              className='ml-1 rounded-lg px-1.5 py-0.5 outline-gray-200 transition-colors hover:bg-gray-200 dark:text-d-text dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
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
              className='ml-1 rounded-lg px-1.5 py-0.5 outline-gray-200 transition-colors hover:bg-gray-200 dark:text-d-text dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
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

import DarkModeButton from '@/components/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='flex items-center gap-3'>
          <AiOutlineCode />
          Developed by{' '}
          <a
            href='https://github.com/arixpsy'
            className='underline-offset-4 hover:underline'
            tabIndex={-1}
          >
            Arix
          </a>
        </p>
        <p className='flex items-center gap-3'>
          <FaCode />
          Source code on{' '}
          <a
            href='https://github.com/arixpsy/wasd'
            className='underline-offset-4 hover:underline'
            tabIndex={-1}
          >
            Github
          </a>
        </p>
      </div>

      <DarkModeButton />
    </div>
  )
}

export default Footer

import { PropsWithChildren } from 'react'

const HeaderIconButton = ({ children }: PropsWithChildren) => {
  return (
    <button className='outline-gray-300 hover:bg-gray-300 dark:text-d-text rounded-lg p-1 text-3xl transition-colors dark:outline-white dark:hover:bg-transparent dark:hover:text-white'>
      {children}
    </button>
  )
}

export default HeaderIconButton

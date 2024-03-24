import { PropsWithChildren } from 'react'

type IconButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement & PropsWithChildren
>

const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <button
      className='rounded-lg p-1 text-3xl outline-gray-300 transition-colors hover:bg-gray-300 dark:text-d-text dark:outline-white dark:hover:bg-transparent dark:hover:text-white'
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton

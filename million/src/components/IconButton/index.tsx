import { cn } from '@/utils/functions/utils'
import { PropsWithChildren } from 'react'

type IconButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement & PropsWithChildren
>

const IconButton = ({ children, className, ...rest }: IconButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-lg p-1 text-3xl outline-gray-200 transition-colors hover:bg-gray-200 dark:text-d-text dark:outline-white dark:hover:bg-transparent dark:hover:text-white',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton

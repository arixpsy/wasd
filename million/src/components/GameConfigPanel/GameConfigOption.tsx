import { PropsWithChildren } from 'react'
import { cn } from '@/utils/functions/utils'

type GameConfigOptionProps = React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{
    isActive?: boolean
  }>

const GameConfigOption = ({
  isActive,
  children,
  ...rest
}: GameConfigOptionProps) => {
  return (
    <div
      className={cn(
        'whitespace-nowrap transition-colors hover:cursor-pointer hover:font-bold hover:text-l-text dark:hover:text-white',
        {
          'font-bold text-l-text dark:text-white': isActive,
        }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default GameConfigOption

import { cn } from '@/utils/functions/utils'
import { PropsWithChildren } from 'react'

type SettingsOptionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    active?: boolean
  }>

const SettingsOptionButton = ({
  active,
  children,
  ...rest
}: SettingsOptionButtonProps) => (
  <button
    className={cn(
      'rounded-lg bg-gray-200 px-3 py-1 transition-colors dark:bg-neutral-700 ',
      'dark:hover:bg-neutral-800 dark:hover:text-white',
      {
        'bg-gray-500 text-white dark:bg-neutral-800': active,
      }
    )}
    {...rest}
  >
    {children}
  </button>
)

export default SettingsOptionButton

import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

type SettingsOptionProps = PropsWithChildren<{
  icon: IconType
  title: string
  description: string
}>

const SettingsOption = ({
  children,
  icon: Icon,
  title,
  description,
}: SettingsOptionProps) => (
  <div>
    <h2 className='flex items-center gap-3 text-lg font-bold'>
      <Icon />
      {title}
    </h2>
    <p>{description}</p>
    <div className='mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {children}
    </div>
  </div>
)

export default SettingsOption

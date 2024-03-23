import { Menu, Transition } from '@headlessui/react'
import { IoMdSettings } from 'react-icons/io'
import { Fragment } from 'react'

const OptionsMenuButton = () => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='rounded-lg p-1 text-3xl outline-gray-300 transition-colors hover:bg-gray-300 dark:text-d-text dark:outline-white dark:hover:bg-transparent dark:hover:text-white'>
        <IoMdSettings />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='shadow-lgfocus:outline-none absolute right-0 mt-2 origin-top-right rounded-lg'>
          Temporary Menu Item
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default OptionsMenuButton

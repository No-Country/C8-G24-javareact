import React from 'react'
import { Menu } from '@headlessui/react'

const TitleItemDropdown = ({title , paddContainer , padd}) => {
  return (
    <div className={`${paddContainer} px-1`}>
    <Menu.Item>
      <div
        className={`text-gray-900 group flex w-full items-center rounded-md px-2 text-sm ${padd}`}>
        {title}
      </div>
    </Menu.Item>
  </div>
  )
}

export default TitleItemDropdown
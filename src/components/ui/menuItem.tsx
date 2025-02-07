import { MenuProps } from '@/utils/interfaces'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router'
import { useState } from 'react'

type Props = {
  data: MenuProps
}

export const MenuItem = ({ data }: Props) => {
  const { pathname } = useLocation()
  const [showSubmenu, toggleSubmenu] = useState(false)

  return (
    <Link
      onMouseEnter={() => toggleSubmenu(Boolean(data.subMenu))}
      onMouseLeave={() => toggleSubmenu(false)}
      className='transition relative item-menu'
      to={data.path}>
      {data.name}

      {pathname === data.path && (
        <motion.div
          layoutId='underline'
          animate
          className='absolute bottom-[-5px] left-0 right-0 height-1 border-b-2 border-[#268381]'
        />
      )}

      {/* {(showSubmenu && data?.subMenu) && (
        <div className='flex flex-col right-0 z-50 gap-2 absolute bg-white text-sm min-h-[64px] px-2 py-4 rounded'>
          {data?.subMenu.map((m, mk) => (
            <Link
              key={mk}
              className='p-2 truncate hover:underline'
              to={m.path}>
              {m.name}
            </Link>
          ))}

        </div>
      )} */}
      <div className='sub-menu flex'></div>
    </Link>
  )
}
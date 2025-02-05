import logo from '@/assets/logo/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { routes } from '@/utils/constants'
import clsx from 'clsx'
import { AnimatedImage } from './image'

export const gradientNavbar = 'bg-gradient-to-r backdrop-blur from-sky-700 to-cyan-600/[0.15]'

const clasess = `
  w-full shadow-xl fixed z-[100] py-4 px-8
  flex flex-col
  md:flex-row md:items-center md:justify-between md:px-12 sm:flex-column
  rounded-lg
  backdrop-blur bg-white/[0.8] text-[#00143f] font-semibold
  fixed
  top-0
  md:top-[2%]
  h-[65px]
  w-full
  md:w-[98%]
  letf-0 md:left-4
  border-gray-200
`

export const NavbarUi = () => {
  const { pathname } = useLocation()

  return (
    <nav className={`${clasess}`}>
      <figure className='hidden md:flex absolute top-[-15px] rounded-full '>
        <Link to='/'>
          <AnimatedImage
            alt='logo'
            className='md:w-[96px] h-auto object-fit rounded-full shadow-xl'
            src={logo} />
        </Link>
      </figure>

      <div className='flex text-sm gap-4 md:gap-6 items-center flex-1 justify-center md:justify-end md:text-lg'>
        {routes.map((route, k) => (
          <Link
            key={k}
            className={`hover:opacity-50 transition relative`}
            to={route.path}>
            {route.name}

            {pathname === route.path && (
              <motion.div
                layoutId='underline'
                animate
                className='absolute bottom-[-5px] left-0 right-0 height-1 border-b-2 border-[#268381]'
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
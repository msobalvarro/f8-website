import logo from '@/assets/logo/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { routes } from '@/utils/constants'

export const gradientNavbar = 'bg-gradient-to-r backdrop-blur from-sky-700 to-cyan-600/[0.15]'

const clasess = 'w-full shadow-xl fixed z-[100] flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 md:px-12 sm:flex-column'

export const NavbarUi = () => {
  const { pathname } = useLocation()

  return (
    <nav className={`${clasess} backdrop-blur bg-white text-[#00143f] font-semibold fixed top-0 h-[65px]`}>
      <figure className='hidden md:flex absolute top-[10px] rounded-full '>
        <Link to='/'>
          <LazyLoadImage
            alt='logo'
            className='md:w-[96px] h-auto object-fit rounded-full shadow-2xl'
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
                className='absolute bottom-[-5px] left-0 right-0 height-1 border-b-2 border-[#0FD8D5]'
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
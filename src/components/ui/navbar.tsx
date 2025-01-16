import logo from '@/assets/logo/F8_Horizontal_Logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { routes } from '@/utils/constants'

export const gradientNavbar = 'bg-gradient-to-r backdrop-blur from-sky-700 to-cyan-600/[0.15]'

const clasess = 'w-full shadow-xl flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 md:px-12 sm:flex-column'

export const NavbarUi = () => {
  const { pathname } = useLocation()

  return (
    <nav className={`${clasess} ${gradientNavbar}`}>
      <figure className='hidden md:flex'>
        <Link to='/'>
          <LazyLoadImage
            alt='logo'
            className='md:w-64 h-auto object-fit'
            src={logo} />
        </Link>
      </figure>

      <div className='flex text-sm md:text-normal gap-4 md:gap-6 items-center flex-1 justify-center md:justify-end'>
        {routes.map((route, k) => (
          <Link
            key={k}
            className={`hover:text-white/50 relative`}
            to={route.path}>
            {route.name}

            {pathname === route.path && (
              <motion.div
                layoutId='underline'
                animate
                className='absolute bottom-[-5px] left-0 right-0 height-1 bg-sky-400 border-b-2 border-white/[0.8]'
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
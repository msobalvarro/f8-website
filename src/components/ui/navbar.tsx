'use client'

import logo from '@/assets/logo/F8_Horizontal_Logo.png'
import clsx from 'clsx'
import { Link } from 'react-router'

export const gradientNavbar = 'bg-gradient-to-r from-sky-700 to-cyan-600'

const clasess = 'w-full flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 sm:flex-column'
const routes = [
  { path: '/', name: 'Inicio' },
  { path: '/products', name: 'Productos' },
  { path: '/services', name: 'Servicios' },
  { path: '/contact', name: 'Contacto' },
]

export const NavbarUi = () => {
  const pathname = window.location.pathname

  return (
    <nav className={`${clasess} ${gradientNavbar}`}>
      <figure className='hidden md:visible'>
        <Link to='/'>
          <img
            alt='logo'
            className='md:w-64 h-auto object-fit'
            src={logo} />
        </Link>
      </figure>

      <div className='flex gap-6 items-center flex-1 justify-center md:justify-end'>
        {routes.map((route, k) => (
          <Link
            key={k}
            className={`hover:text-white/50 ${clsx({
              'border-b-2': pathname === route.path,
            })}`}
            to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
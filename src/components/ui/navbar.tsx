import logo from '@/assets/logo/logo.png'
import { Link, useLocation } from 'react-router'
import { routes } from '@/utils/constants'
import { AnimatedImage } from './image'
import { useEffect, useState } from 'react'
import { useProductsPropierties, useServicesPropierties } from '@/utils/store'
import { MenuProps } from '@/utils/interfaces'
import { MenuItem } from './menuItem'

export const gradientNavbar = 'bg-gradient-to-r backdrop-blur from-sky-700 to-cyan-600/[0.15]'

const clasess = `
  w-full shadow-xl fixed z-[100] py-4 px-8
  flex flex-col
  md:flex-row md:items-center
  md:justify-between
  md:px-2
  sm:flex-column
  md:backdrop-blur 
  bg-white
  md:bg-white
  text-[#00143f]
  font-semibold
  fixed
  top-0
  gap-4
  h-[65px]
  w-full
  border-gray-200
  z-40
`

export const NavbarUi = () => {
  const [menu, setMenu] = useState<MenuProps[]>(routes)
  const { products } = useProductsPropierties()
  const { services } = useServicesPropierties()
  const { pathname } = useLocation()

  // console.log(menu)

  useEffect(() => {
    if (products) {
      const newMenu = menu.map(i => {
        if (i.path === '/products') {
          return {
            ...i,
            subMenu: products.map(p => ({
              name: p.name,
              path: `/products?id=${p._id}`
            }))
          }
        }

        return i
      })

      setMenu(newMenu)
    }

    if (services) {
      const newMenu = menu.map(i => {
        if (i.path === '/services') {
          return {
            ...i,
            subMenu: services.map(p => ({
              name: p.title,
              path: `/services?id=${p._id}`
            }))
          }
        }

        return i
      })
      setMenu(newMenu)

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, services])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

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
        {menu.map((route, k) => <MenuItem data={route} key={k} />)}
      </div>
    </nav >
  )
}
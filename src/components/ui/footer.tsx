import logo from '@/assets/logo/F8_Logo_Basic_Variant.png'
import { Link } from 'react-router'

export const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 md:flex-row justify-between items-center text-white p-12 w-full'>
      <figure className='bg-white p-6 rounded-full w-32 h-32 flex items-center justify-center'>
        <img
          src={logo}
          className='w-full'
          alt='logo' />
      </figure>

      <div className='flex items-center md:gap-8 sm:text-sm gap-4 xs:text-sm xs:gap-4'>
        <p>F8 Technologies {new Date().getFullYear()}</p>

        <p>Todos los derechos reservados</p>

        <Link to='/contact' className='text-sky-200 hover:underline'>Contacto</Link>
      </div>
    </footer>
  )
}
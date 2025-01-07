import logo from '@/assets/logo/F8_Logo_Basic_Variant.png'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router'

export const Footer = () => {
  return (
    <footer className='flex flex-col backdrop-blur bg-gray-800/50 gap-10 md:flex-row justify-between items-center text-white p-8 lg:p-12 lg:py-4 w-full'>
      <figure className='bg-white p-6 rounded-full w-32 h-32 flex items-center justify-center'>
        <img
          src={logo}
          className='w-full'
          alt='logo' />
      </figure>

      <div className='flex flex-col gap-4 sm:text-sm xs:text-sm'>
        <div className='flex items-center gap-4'>
          <p>F8 Technologies {new Date().getFullYear()}</p>
          <p>Todos los derechos reservados</p>
          <Link to='/contact' className='text-sky-200 hover:underline'>Contacto</Link>
        </div>

        <div className='flex justify-center md:justify-end gap-4 text-3xl'>
          <a target='_blank' className='text-sky-700' href='https://www.facebook.com/F8technologies'>
            <BiLogoFacebookSquare />
          </a>

          <a className='text-rose-700' href='https://www.instagram.com/f8technologies_ni/?hl=en'>
            <FaInstagramSquare />
          </a>
          
          <a>
            <BsTwitterX />
          </a>
        </div>
      </div>
    </footer>
  )
}
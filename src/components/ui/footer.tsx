import logo from '@/assets/logo/F8_Logo_Basic_Variant.png'
import { useStorePropierties } from '@/utils/store'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router'

export const Footer = () => {
  const { propierties } = useStorePropierties()
  
  return (
    <footer className='flex flex-col backdrop-blur bg-gray-800/50 gap-10 md:flex-row justify-between items-center text-white p-8 lg:p-12 lg:py-4 w-full'>
      <figure className='bg-white p-6 rounded-full w-32 h-32 flex items-center justify-center'>
        <LazyLoadImage
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

        <div className='flex justify-center md:justify-end space-x-4 text-3xl'>
          <a
            href={propierties?.find(e => e.key === 'facebook')?.value}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'
          >
            <FaFacebook />
          </a>
          <a
            href={propierties?.find(e => e.key === 'twitter')?.value}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'
          >
            <FaTwitter />
          </a>
          <a
            href={propierties?.find(e => e.key === 'instagram')?.value}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'
          >
            <FaInstagram />
          </a>
          <a
            // href='https://linkedin.com'
            href={propierties?.find(e => e.key === 'linkedin')?.value}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'
          >
            <FaLinkedin />
          </a>
          <a
            href={`wa.me/${propierties?.find(e => e.key === 'whatsapp')?.value}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
import logo from '@/assets/logo/logo.png'
import { routes } from '@/utils/constants'
import { useStorePropierties } from '@/utils/store'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router'

export const Footer = () => {
  const { propierties } = useStorePropierties()

  const socialMediaLinks = {
    facebook: propierties?.find(e => e.key === 'facebook')?.value,
    x: propierties?.find(e => e.key === 'x')?.value,
    linkedin: propierties?.find(e => e.key === 'linkedin')?.value,
    whatsapp: propierties?.find(e => e.key === 'whatsapp')?.value,
    instagram: propierties?.find(e => e.key === 'instagram')?.value,
  }

  return (
    <footer className='flex flex-col backdrop-blur bg-gray-800/50 gap-10 lg:flex-row justify-between items-center text-white p-8 lg:p-12 lg:py-4 w-full text-sm md:text-normal'>
      <LazyLoadImage
        src={logo}
        className='w-32'
        alt='logo' />

      <div className='flex flex-1 flex-col gap-8'>
        <div className='flex justify-center md:justify-end space-x-3 text-xl flex-1'>
          {socialMediaLinks.facebook && (
            <a
              href={socialMediaLinks.facebook}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'>
              <FaFacebook />
            </a>
          )}

          {socialMediaLinks.x && (
            <a
              href={socialMediaLinks.x}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'>
              <FaTwitter />
            </a>
          )}

          {socialMediaLinks.instagram && (
            <Link to={socialMediaLinks.instagram}>
              <a
                href={socialMediaLinks.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'>
                <FaInstagram />
              </a>
            </Link>
          )}

          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'>
              <FaLinkedin />
            </a>
          )}

          {socialMediaLinks.whatsapp && (
            <a
              href={`https://wa.me/${socialMediaLinks.whatsapp}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white'>
              <FaWhatsapp />
            </a>
          )}
        </div>

        <div className='flex items-center md:text-lg justify-center md:justify-end gap-4 flex-1'>
          {routes.map(route => (
            <Link to={route.path} key={route.path} className='text-sky-200 hover:underline'>{route.name}</Link>
          ))}
        </div>
      </div>

    </footer>
  )
}
import { useStorePropierties } from '@/utils/store'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
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
    <footer className=' border-b-[#0FD8D5] border-b-8 p-8'>
      <div className='flex justify-center space-x-8 text-xl flex-1'>
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

      <p className='text-center text-gray-500 text-sm mt-4'>
        F8 Technologies &copy; {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  )
}
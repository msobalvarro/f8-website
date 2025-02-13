import { useStorePropierties } from '@/utils/store'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'

const buttonClasess = 'rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300'

export const Footer = () => {
  const { propierties } = useStorePropierties()

  const socialMediaLinks = {
    facebook: propierties?.find(e => e.key === 'facebook')?.value,
    x: propierties?.find(e => e.key === 'x')?.value,
    linkedin: propierties?.find(e => e.key === 'linkedin')?.value,
    whatsapp: propierties?.find(e => e.key === 'whatsapp')?.value,
    whatsapp2: propierties?.find(e => e.key === 'whatsapp2')?.value,
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
            className={`${buttonClasess} text-blue-600`}>
            <FaFacebook />
          </a>
        )}

        {socialMediaLinks.x && (
          <a
            href={socialMediaLinks.x}
            target='_blank'
            rel='noopener noreferrer'
            className={`${buttonClasess} text-blue-400`}>
            <FaTwitter />
          </a>
        )}

        {socialMediaLinks.instagram && (
          <Link to={socialMediaLinks.instagram}>
            <a
              href={socialMediaLinks.instagram}
              target='_blank'
              rel='noopener noreferrer'
              className={`${buttonClasess} text-pink-500`}>
              <FaInstagram />
            </a>
          </Link>
        )}

        {socialMediaLinks.linkedin && (
          <a
            href={socialMediaLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className={`${buttonClasess} text-blue-700`}>
            <FaLinkedin />
          </a>
        )}

        {socialMediaLinks.whatsapp && (
          <a
            href={`https://wa.me/${socialMediaLinks.whatsapp}`}
            target='_blank'
            rel='noopener noreferrer'
            className={`${buttonClasess} text-green-500`}>
            <FaWhatsapp />
          </a>
        )}

        {socialMediaLinks.whatsapp2 && (
          <a
            href={`https://wa.me/${socialMediaLinks.whatsapp2}`}
            target='_blank'
            rel='noopener noreferrer'
            className={`${buttonClasess} text-sky-500`}>
            <FaWhatsapp />
          </a>
        )}
      </div>

      <div className='flex items-center justify-center flex-col'>
        <p className='text-center text-gray-300 text-sm mt-4'>
          F8Technologies &copy; {new Date().getFullYear()} - Todos los derechos reservados</p>

        <p className='text-center text-gray-300 text-sm mt-4'>
          Hecho en Managua, Nicaragua ❤️
        </p>
      </div>
    </footer>
  )
}
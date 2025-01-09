import { useStorePropierties } from '@/utils/store'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const itemClasess = 'bg-gray-900 hover:bg-slate-700 flex flex-1 flex-col items-center gap-3 bg-gray-800 rounded-lg p-4'


export const ContactCard = () => {
  const { propierties: data } = useStorePropierties()

  return (
    <div className='flex flex-row sm:gap-2 lg:gap-8'>
      <a target='_blank' href={`mailto:${data?.find(e => e.key === 'emailContact')?.value}`} className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoMdMail className='text-3xl text-gray-500' />
        </span>

        <p className='text-xl hidden md:block'>Escribenos</p>
        <p className='text-sky-200 text-center hidden md:block'>{data?.find(e => e.key === 'emailContact')?.value}</p>
      </a>


      <a target='_blank' href={`tel:${data?.find(e => e.key === 'phoneContact')?.value}`} className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoCall className='text-3xl text-sky-700' />
        </span>

        <p className='text-xl hidden md:block'>Llámanos</p>
        <p className='text-sky-200 text-center hidden md:block'>{data?.find(e => e.key === 'phoneContact')?.value}</p>
      </a>


      <a target='_blank' href={`wa.me/${data?.find(e => e.key === 'whatsapp')?.value}`} className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoLogoWhatsapp className='text-3xl text-green-700' />
        </span>

        <p className='text-xl hidden md:block'>WhatsApp</p>
        <p className='text-sky-200 text-center hidden md:block'>{data?.find(e => e.key === 'whatsapp')?.value}</p>
      </a>
    </div>
  )
}
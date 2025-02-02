import { ServiceResponse } from '@/utils/interfaces'
import { ProductSliderImage } from '../products/slider'
import dayjs from 'dayjs'
import { FaCalendarCheck } from 'react-icons/fa'

interface Props {
  service: ServiceResponse
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <div className='fade-in flex-col flex backdrop-blur bg-white text-[#00143F] rounded-xl shadow-xl items-center gap-10 flex-1 p-6 md:p-12 relative w-full overflow-hidden'>
      <div className='flex flex-col gap-2 flex-1 z-20'>
        <div className='flex items-center justify-end gap-2 text-gray-500'>
          <FaCalendarCheck />
          <p>
            {dayjs(service.updatedAt || service.createdAt).format('DD MMM YYYY')}
          </p>
        </div>
        <h3 className='text-2xl font-bold lg:text-4xl'>{service.title}</h3>
        <p className='text-[#00143F]'>{service.description}</p>
      </div>

      <div className='w-full z-20'>
        <ProductSliderImage images={service.images} />
      </div>
    </div>
  )
}
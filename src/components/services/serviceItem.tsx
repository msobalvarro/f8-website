import { ServiceResponse } from '@/utils/interfaces'
import { ProductSliderImage } from '../products/slider'

interface Props {
  service: ServiceResponse
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <div className='fade-in flex-col flex backdrop-blur bg-gray-800/[0.2] border-2 border-gray-700 rounded-xl shadow-xl items-center gap-10 flex-1 p-6 md:p-12 relative w-full overflow-hidden'>
      <div className='flex flex-col gap-2 flex-1 z-20'>
        <h3 className='text-2xl font-bold lg:text-4xl'>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <div className='w-full z-20'>
        <ProductSliderImage images={service.images} />
      </div>
    </div>
  )
}
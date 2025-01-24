import { ServiceResponse } from '@/utils/interfaces'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { ServiceItem } from './serviceItem'
import { ProductsSkeletons } from '../products/cardSkeleton'
import { useFetch } from '@/hooks/useFetch'
import { Link } from 'react-router'

export const PreviewServices = () => {
  const { data: services, isLoading, error } = useFetch<ServiceResponse[]>('/services?pinned=true')

  if (error) return <p>Ha ocurrido un error: {String(error)}</p>

  return (
    <div className='flex flex-1 flex-col my-10 gap-10 items-center p-1 md:p-12 sm:p-2 w-full'>
      <h2 className='text-4xl md:self-start self-center tag-line'>Servicios de F8</h2>

      <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 w-full p-4 md:p-0'>
        {(isLoading) && <ProductsSkeletons />}
        
        {(!isLoading) && services?.map(
          (service, index) => service.pinned && <ServiceItem key={index} service={service} />
        )}
      </article>


      <Link className='self-end' to='/services'>
        <Button>
          Mostrar todos los Servicios F8
          <IoIosArrowForward />
        </Button>
      </Link>
    </div>
  )
}
import { ServiceResponse } from '@/utils/interfaces'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { ServiceItem } from './serviceItem'
import { ProductsSkeletons } from '../products/cardSkeleton'
import { useFetch } from '@/hooks/useFetch'
import { Link } from 'react-router'
import { useServicesPropierties } from '@/utils/store'
import { useEffect } from 'react'

export const PreviewServices = () => {
  const { setServices } = useServicesPropierties()
  const { data: services, isLoading, error } = useFetch<ServiceResponse[]>('/services?pinned=true')

  useEffect(() => {
    if (services) {
      setServices(services)
    }
  }, [services, setServices])

  if (error) return <p>Ha ocurrido un error: {String(error)}</p>

  return (
    <div className='flex flex-1 flex-col my-10 gap-10 items-end p-1 md:p-12 sm:p-2 w-full text-cen'>
      <h2 className='text-4xl md:self-center tag-line justify-self-center'>Nuestros Servicios</h2>
      

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
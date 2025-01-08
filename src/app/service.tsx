'use client'

import { ServiceItem } from '@/components/services/serviceItem'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'
import { ServiceResponse } from '@/utils/interfaces'
import { useFetch } from '@/hooks/useFetch'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'

export default function Services() {
  const { data, isLoading } = useFetch<ServiceResponse[]>('/services')

  return (
    <UiLayout>
      <UiTitle
        title='Cotiza nuestros servicios'
        description='Explora la amplia gama de servicios que ofrecemos, diseñados para adaptarse a tus necesidades específicas y superar tus expectativas. Ya sea que busques soluciones personalizadas, atención rápida o resultados de alta calidad, estamos aquí para brindarte el apoyo que necesitas. Nuestro compromiso es ofrecerte un servicio excepcional, respaldado por experiencia, profesionalismo y dedicación en cada detalle.'
      />

      {isLoading && <ProductsSkeletons />}

      <div className='grid md:grid-cols-2 sm:grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {data?.map((service, index) => (<ServiceItem key={index} service={service} />))}
      </div>
    </UiLayout>
  )
}
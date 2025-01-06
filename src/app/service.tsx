'use client'

import { ServiceItem } from '@/components/services/serviceItem'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'
import { ServiceResponse } from '@/utils/interfaces'
import { useFetch } from '@/hooks/useFetch'

export default function Services() {
  const { data } = useFetch<ServiceResponse[]>('/services')

  return (
    <UiLayout>
      <UiTitle
        title='Cotiza nuestros servicios'
        description='Hecha un vistazo a todos nuestros servicios, nos ajustamos a tus necesidades'
      />


      <div className='grid md:grid-cols-2 sm:grid-cols-1 w-full p-10 gap-10'>
        {data?.map((service, index) => (<ServiceItem key={index} service={service} />))}
      </div>
    </UiLayout>
  )
}
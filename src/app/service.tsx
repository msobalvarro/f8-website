import { ServiceItem } from '@/components/services/serviceItem'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'
import { ServiceResponse } from '@/utils/interfaces'
import { useFetch } from '@/hooks/useFetch'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'
import { useState } from 'react'

export default function Services() {
  const { data, isLoading } = useFetch<ServiceResponse[]>('/services')
  const [filter, setFilter] = useState('')

  const dataFilter = data?.filter((service) =>
    `${service.title} ${service.description}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  )

  return (
    <UiLayout>
      <UiTitle
        title='Cotiza nuestros servicios'
        description='Explora la amplia gama de servicios que ofrecemos, diseñados para adaptarse a tus necesidades específicas y superar tus expectativas.'
        showSearch
        textFilter={filter}
        setFilter={setFilter}
      />

      <article className='grid lg:grid-cols-2 grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {isLoading && <ProductsSkeletons />}
        {dataFilter?.map((service, index) => (<ServiceItem key={index} service={service} />))}
      </article>

      {dataFilter?.length === 0 && (
        <p className='text-xl text-slate-500 w-full text-center flex-1'>
          No se encontraron resultados
        </p>
      )}
    </UiLayout>
  )
}
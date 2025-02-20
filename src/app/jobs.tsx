import { ItemJob } from '@/components/jobs/itemJob'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'
import { useFetch } from '@/hooks/useFetch'
import { JobsResponse } from '@/utils/interfaces'
import { useState } from 'react'

export default function Jobs() {
  const { data: jobs, isLoading } = useFetch<JobsResponse[]>('/jobs/all')
  const [filter, setFilter] = useState<string>('')

  const dataFilter = jobs?.filter((job) =>
    `${job.title} ${job.description} ${job.location} ${job.tags.toString()}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  )

  return (
    <UiLayout addClassName='flex flex-col md:gap-12'>
      <UiTitle
        showSearch
        textFilter={filter}
        setFilter={setFilter}
        title='Empleos en F8'
        description='Aplica a nuestras vacantes y forma parte de nuestro equipo de trabajo.'
      />

      {isLoading && <ProductsSkeletons />}

      <article className='grid lg:grid-cols-2 grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {dataFilter?.map((job, k) => <ItemJob job={job} key={k} />)}
      </article>

      {dataFilter?.length === 0 && jobs?.length === 0 && (
        <p className='text-2xl text-gray-500 text-center'>No hay empleos disponibles</p>
      )}
      
      {dataFilter?.length === 0 && (jobs?.length ?? 0) > 0 && (
        <p className='text-2xl text-gray-500 text-center'>No se encontraron resultados</p>
      )}
    </UiLayout>
  )
}
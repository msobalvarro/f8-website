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
        description='Explora la amplia gama de servicios que ofrecemos, diseñados para adaptarse a tus necesidades específicas y superar tus expectativas.'
      />

      <article className='grid lg:grid-cols-2 grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {isLoading && <ProductsSkeletons />}
        {data?.map((service, index) => (<ServiceItem key={index} service={service} />))}
      </article>
    </UiLayout>
  )
}
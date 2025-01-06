'use client'

import { ProductItem } from '@/components/products/productItem'
import { UiLayout } from '@/components/ui/layout'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'
import { UiTitle } from '@/components/ui/title'
import { useFetch } from '@/hooks/useFetch'

export default function Products() {
  const { data: products, isLoading } = useFetch<ProductsPropierties[]>('/products')

  return (
    <UiLayout>
      <UiTitle
        title='Nuestros Productos'
        description='Somos importadores de marcas oficiales, nuestra calidad en nuestro productos nos define como empresa'
      />

      {(!products && isLoading) && <ProductsSkeletons />}

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10 w-full'>
        {products?.map((product: ProductsPropierties) => !product.archived && (
          <ProductItem key={crypto.randomUUID()} product={product} />
        ))}
      </article>
    </UiLayout>
  )
}
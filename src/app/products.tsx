'use client'

import { ProductItem } from '@/components/products/productItem'
import { UiLayout } from '@/components/ui/layout'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'
import { UiTitle } from '@/components/ui/title'
import { useFetch } from '@/hooks/useFetch'
import { v4 } from 'uuid'
import { useState } from 'react'

export default function Products() {
  const { data: products, isLoading } = useFetch<ProductsPropierties[]>('/products')
  const [filter, setFilter] = useState('')

  const dataFilter = products?.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  )

  return (
    <UiLayout>
      <UiTitle
        title='Nuestros Productos'
        description='Somos importadores de marcas oficiales reconocidas a nivel internacional, comprometidos con ofrecer productos de la más alta calidad.'
      />

      <input
        type='text'
        value={filter}
        placeholder='Buscar producto'
        className='w-full p-3 mt-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900'
        onChange={(e) => setFilter(e.target.value)} />

      {isLoading && <ProductsSkeletons />}

      <article className='grid lg:grid-cols-2 grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {dataFilter?.map((product: ProductsPropierties) => !product.archived && (
          <ProductItem key={v4()} product={product} />
        ))}
      </article>
    </UiLayout>
  )
}
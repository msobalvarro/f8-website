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
        showSearch
        textFilter={filter}
        setFilter={setFilter}
      />

      {isLoading && <ProductsSkeletons />}

      <article className='grid lg:grid-cols-2 grid-cols-1 w-full mt-6 md:mt-10 gap-10'>
        {dataFilter?.map((product: ProductsPropierties) => !product.archived && (
          <ProductItem key={v4()} product={product} />
        ))}
      </article>

      {dataFilter?.length === 0 && (
        <p className='text-xl text-slate-500 w-full text-center flex-1'>
          No se encontraron resultados
        </p>
      )}
    </UiLayout>
  )
}
'use client'

import { ProductItem } from '@/components/products/productItem'
import { UiLayout } from '@/components/ui/layout'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from '@/components/products/cardSkeleton'
import { UiTitle } from '@/components/ui/title'
import { useFetch } from '@/hooks/useFetch'
import { v4 } from 'uuid'

export default function Products() {
  const { data: products, isLoading } = useFetch<ProductsPropierties[]>('/products')

  return (
    <UiLayout>
      <UiTitle
        title='Nuestros Productos'
        description='Somos importadores de marcas oficiales reconocidas a nivel internacional, comprometidos con ofrecer productos de la más alta calidad. Nuestra dedicación al control de calidad y al servicio al cliente nos define como una empresa confiable y líder en el mercado, garantizando a nuestros clientes una experiencia única y productos que cumplen con los más altos estándares de excelencia.'
      />

      {isLoading && <ProductsSkeletons />}
      
      <article className='grid md:grid-cols-2 sm:grid-cols-1 mt-10 gap-10 w-full'>
        {products?.map((product: ProductsPropierties) => !product.archived && (
          <ProductItem key={v4()} product={product} />
        ))}
      </article>
    </UiLayout>
  )
}
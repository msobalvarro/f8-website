import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from './cardSkeleton'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { ProductItem } from './productItem'
import { useFetch } from '@/hooks/useFetch'
import { Link } from 'react-router'
import { useEffect } from 'react'
import { useProductsPropierties } from '@/utils/store'

export const PreviewProducts = () => {
  const { setProducts } = useProductsPropierties()
  const { data: products, isLoading, error } = useFetch<ProductsPropierties[]>('/products?pinned=true')

  useEffect(() => {
    if (products) {
      setProducts(products)
    }
  }, [products, setProducts])

  if (error) return <p>Ha ocurrido un error: {String(error)}</p>

  return (
    <div className='flex flex-col my-10 gap-10 items-center md:p-12 sm:p-2 w-full'>
      <h2 className='text-4xl md:self-start self-center tag-line'>Productos de F8</h2>

      {(isLoading) && <ProductsSkeletons />}

      <article className='grid lg:grid-cols-2 grid-cols-1 gap-10 w-full p-4 md:p-0'>
        {!isLoading && (products || [])?.map((product, index) => product.pinned && <ProductItem key={index} product={product} />)}
      </article>


      <Link className='self-end' to='/products'>
        <Button>
          Mostrar todos los productos F8
          <IoIosArrowForward />
        </Button>
      </Link>
    </div>
  )
}
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from './cardSkeleton'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { ProductItem } from './productItem'
import { useFetch } from '@/hooks/useFetch'
import { Link } from 'react-router'

export const PreviewProducts = () => {
  const { data: products, isLoading, error } = useFetch<ProductsPropierties[]>('/products?pinned=true')

  if (error) return <p>Ha ocurrido un error: {String(error)}</p>

  return (
    <div className='flex flex-col my-10 gap-10 items-center md:p-12 sm:p-2 w-full'>
      <p className='text-4xl md:self-start self-center'>Productos de F8</p>

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
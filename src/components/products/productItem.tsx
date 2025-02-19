import { ProductsPropierties } from '@/utils/interfaces'
import { ProductSliderImage } from './slider'
import { Button } from '@mui/material'
import { Link } from 'react-router'

interface Props {
  product: ProductsPropierties
}

export const ProductItem = ({ product }: Props) => {
  return (
    <div className='fade-in transition-all rounded-lg overflow-hidden shadow bg-white text-[#00143F]'>
      <ProductSliderImage images={product.images} />

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight'>
          {product.name}
        </h5>

        <p className='mb-3 font-normal text-[#00143F]'>
          {product.description}
        </p>

        <div className='flex justify-end'>
          <Link to={`/contact?product=${product.name}`}>
            <Button>
              Cotizar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
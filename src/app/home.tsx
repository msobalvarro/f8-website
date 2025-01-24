import banner2 from '@/assets/banner/art-banner-2.png'
import banner3 from '@/assets/banner/art-banner-3.png'
import { PreviewProducts } from '@/components/products/previewProducts'
import { PreviewServices } from '@/components/services/previewServices'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Hero } from '@/components/ui/hero'
import { Brands } from '@/components/brands'

export default function Home() {

  return (
    <>
      <Hero />

      <Brands />

      <LazyLoadImage
        className='w-full'
        src={banner2}
        alt='baner' />

      <PreviewServices />

      <LazyLoadImage
        className='w-full'
        src={banner3}
        alt='baner' />

      <PreviewProducts />
    </>
  )
}

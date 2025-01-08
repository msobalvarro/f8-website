import { LazyLoadImage } from 'react-lazy-load-image-component'
import banner2 from '@/assets/banner/art-banner-2.png'
import banner3 from '@/assets/banner/art-banner-3.png'
import { UiLayout } from '@/components/ui/layout'
import { ParallaxFrames } from '@/components/parallax'
import { PreviewProducts } from '@/components/products/previewProducts'
import { PreviewServices } from '@/components/services/previewServices'
import { Hero } from '@/components/ui/hero'

export default function Home() {

  return (
    <UiLayout fullWidth>
      <Hero />

      <LazyLoadImage
        className='w-full'
        src={banner2}
        alt='baner' />

      <ParallaxFrames />

      <PreviewServices />

      <LazyLoadImage
        className='w-full'
        src={banner3}
        alt='baner' />

      <PreviewProducts />

    </UiLayout>
  )
}

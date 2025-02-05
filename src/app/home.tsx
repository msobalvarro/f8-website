import banner2 from '@/assets/banner/art-banner-2.png'
import banner3 from '@/assets/banner/art-banner-3.png'
import { PreviewProducts } from '@/components/products/previewProducts'
import { PreviewServices } from '@/components/services/previewServices'
import { Hero } from '@/components/ui/hero'
import { Brands } from '@/components/brands'
import { AnimatedImage } from '@/components/ui/image'

export default function Home() {

  return (
    <>
      <Hero />

      <Brands />

      <AnimatedImage
        className='w-full border-y-4 border-y-[#0FD8D5] animate__animated animate__fadeInUp'
        src={banner2}
        alt='baner' />

      <PreviewServices />

      <AnimatedImage
        className='w-full border-y-4 border-y-[#0FD8D5] animate__animated animate__fadeInUp'
        src={banner3}
        alt='baner' />

      <PreviewProducts />
    </>
  )
}

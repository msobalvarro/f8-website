import { BrandMarquee } from '../ui/marquee'
import { AiFillSafetyCertificate } from 'react-icons/ai'

export const Brands = () => {
  return (
    <article className='bg-white w-full relative overflow-hidden flex flex-col gap-4 animate__animated animate__fadeInUp'>

      <BrandMarquee addClass='absolute left-0 bottom-0' />

    </article>
  )
}
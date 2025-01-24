import { BrandMarquee } from '../ui/marquee'
import { AiFillSafetyCertificate } from 'react-icons/ai'

export const Brands = () => {
  return (
    <article className='bg-white w-full relative overflow-hidden flex flex-col gap-4 pt-8'>
      <div className='flex justify-center items-center gap-4 '>
        <AiFillSafetyCertificate className='text-4xl text-[#00143F] ' />
        <h2 className='text-gray-800 font-bold text-3xl'>
          Certificados Oficiales
        </h2>
      </div>


      <BrandMarquee addClass='absolute left-0 bottom-0' />

    </article>
  )
}
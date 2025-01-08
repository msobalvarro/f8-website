import logo from '@/assets/logo/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  title: string
  description: string
}

export const UiTitle = ({ title, description }: Props) => (
  <header className='flex flex-col md:flex-row justify-between rounded-xl items-center backdrop-blur items-top gap-4 p-10 bg-gray-800/[0.2] border-2 border-slate-600 w-full'>
    <LazyLoadImage
      src={logo}
      className='w-64'
      alt='logo' />

    <view className='flex flex-col gap-4 items-center md:items-end'>
      <h1 className='text-4xl md:text-right lg:text-6xl'>{title}</h1>
      <p className='text-gray-400 break-normal text-center md:text-right self-center md:self-right lg:self-end lg:w-[70%]'>
        {description}
      </p>
    </view>

  </header>
)

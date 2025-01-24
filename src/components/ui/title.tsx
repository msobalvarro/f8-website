import logo from '@/assets/logo/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  title: string
  description?: string
}

export const UiTitle = ({ title, description }: Props) => (
  <header className='flex flex-col md:flex-row justify-between rounded-xl items-center md:backdrop-blur items-top gap-4 p-10 md:bg-white  w-full'>
    <LazyLoadImage
      src={logo}
      className='w-64 fade-in'
      alt='logo' />

    <view className='flex flex-col gap-4 items-center md:items-end fade-in'>
      <h1 className='text-4xl  lg:text-6xl text-center md:text-right text-[#0fd8d5]'>{title}</h1>
      {description && (
        <p className='text-gray-400 break-normal text-center md:text-right self-center md:self-right lg:self-end lg:w-[70%]'>
          {description}
        </p>
      )}
    </view>

  </header>
)

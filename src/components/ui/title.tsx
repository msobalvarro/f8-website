import logo from '@/assets/logo/logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Props {
  title: string
  description?: string
}

export const UiTitle = ({ title, description }: Props) => (
  <header className='flex flex-col md:flex-row justify-between rounded-xl items-center items-top gap-4 p-10 w-full'>

    <view className='flex-1 flex flex-col gap-6 fade-in'>
      <h1 className='text-4xl lg:text-6xl text-center text-[#0fd8d5]'>{title}</h1>

      <div className='border-b-[#0FD8D5] border-b' />

      {description && (
        <p className='text-gray-400 break-normal text-center self-center'>
          {description}
        </p>
      )}
    </view>

  </header>
)

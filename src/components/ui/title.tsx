// import logo from '@/assets/logo/logo.png'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { InputSearch } from './inputSearch'
import clsx from 'clsx'

interface Props {
  title: string
  description?: string
  showSearch?: boolean
  textFilter?: string
  setFilter?: (value: string) => void
}

export const UiTitle = ({ title, description, showSearch, textFilter, setFilter }: Props) => (
  <header className='flex flex-col text-center md:flex-row justify-between rounded-xl items-center items-top gap-4 p-10 w-full'>

    <view className='flex-1 flex flex-col gap-6 fade-in animate__animated animate__fadeInDown'>
      <div className={`flex flex-1 flex-col md:flex-row space-y-6 items-center ${clsx({ 'justify-between': showSearch, 'justify-center': !showSearch })}`}>
        <h1 className='text-4xl lg:text-6xl text-[#0FD8D5]'>{title}</h1>
        {(showSearch) && (
          <InputSearch value={String(textFilter)} onChangeText={e => setFilter?.(e)} />
        )}
      </div>

      <div className='border-b-[#0FD8D5] border-b' />

      {description && (
        <p className='text-white/[0.8] break-normal text-center self-center text-lg'>
          {description}
        </p>
      )}
    </view>

  </header>
)

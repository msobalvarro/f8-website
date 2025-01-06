import logo from '@/assets/logo/logo.png'

interface Props {
  title: string
  description: string
}

export const UiTitle = ({ title, description }: Props) => (
  <div className='flex flex-col items-center gap-2 text-center p-12'>
    <img
      src={logo}
      className='w-64'
      alt='logo' />

    <h1 className='text-3xl'>{title}</h1>
    <p className='text-gray-500 lg:text-xl'>
      {description}
    </p>
  </div>
)

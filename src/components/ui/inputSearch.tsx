import { CiSearch } from 'react-icons/ci'

interface Props {
  value: string
  onChangeText: (value: string) => void
}

export const InputSearch = () => {
  return (
    <div className='flex items-center border border-white[0.2] rounded-xl'>
      <CiSearch />
      
      <input
        type='text'
        placeholder='Buscar...'
        className='flex-1 pl-3 text-white w-full'
      />

      

    </div>
  )
}
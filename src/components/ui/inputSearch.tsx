import { CiSearch } from 'react-icons/ci'
import { MdOutlineClear } from 'react-icons/md'

interface Props {
  value: string
  onChangeText: (value: string) => void
}

export const InputSearch = ({ onChangeText, value }: Props) => {
  return (
    <div className='flex items-center border border-white[0.2] rounded-xl px-4'>
      <CiSearch />

      <input
        type='text'
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder='Buscar...'
        className='flex-1 pl-3 text-white bg-transparent outline-none p-4 w-full'
      />

      <button
        onClick={() => onChangeText('')}
        className='text-white hover:text-white[0.5] p-2'>
        <MdOutlineClear />
      </button>

    </div>
  )
}
import clsx from 'clsx'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineClear } from 'react-icons/md'

interface Props {
  value: string
  onChangeText: (value: string) => void
}

export const InputSearch = ({ onChangeText, value }: Props) => {
  const [focus, setFocus] = useState(false)
  
  return (
    <div className={`flex items-center transition-all border rounded-xl backdrop-blur-md px-4 ${clsx({
      'border-white[0.2]': !focus,
      'border-[#0FD8D5] bg-white/[0.2]': focus,

    })}`}>
      <CiSearch />

      <input
        type='text'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
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
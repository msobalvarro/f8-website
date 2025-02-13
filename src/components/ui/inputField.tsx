'use client'

import clsx from 'clsx'
import { useState, InputHTMLAttributes } from 'react'

interface Props {
  onEnter?: () => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  className?: string
}

export const inputClassNames = 'outline-none bg-white text-black border text-gray-900 text-sm rounded-lg focus:ring-[#0FD8D5] focus:border-[#0FD8D5] block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'


export const InputField = (props: Props) => {
  const [isFocus, setFocus] = useState<boolean>(false)
  return (
    <input
      {...props.inputProps}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          props?.onEnter?.()
        }
      }}
      className={`${inputClassNames} ${clsx({
        'shadow-md': isFocus,
        'border-gray-400': isFocus,
      })} ${props.className || ''}`}
    />
  )
}
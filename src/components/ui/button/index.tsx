import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type: 'primary' | 'secondary' | 'green' | 'purple' | 'pink' | 'orange'
  className?: string
  disabled?: boolean
}

export const UiButton = ({ children, type, className, disabled }: Props) => (
  <button
    disabled={disabled}
    className={`
    transition-all
    ${clsx({
      'text-[#00143F] bg-[#0FD8D5] focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'primary',
      'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'secondary',
      'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'green',
      'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'purple',
      'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'pink',
    })} ${className}`}>
    {children}
  </button>
)

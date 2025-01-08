import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface Props {
  fullWidth?: boolean
  children: ReactNode
  addClassName?: string
}

export const UiLayout = ({ children, addClassName, fullWidth }: Props) => {
  return (
    <div className={`justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] ${addClassName} ${clsx({
      'p-5 md:p-10': !fullWidth
    })}`}>
      {children}
    </div>
  )
}
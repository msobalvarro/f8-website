import { ReactNode } from 'react'

interface Props {
  fullWidth?: boolean
  children: ReactNode
  addClassName?: string
}

export const UiLayout = ({ children, addClassName }: Props) => {
  return (
    <div className={`justify-items-center min-h-screen p-4 lg:p-12 font-[family-name:var(--font-geist-sans)] ${addClassName}`}>
      {children}
    </div>
  )
}
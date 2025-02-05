import { SyntheticEvent, useState } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

interface AnimatedImageProps extends HTMLMotionProps<'img'> {
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void
}

export const AnimatedImage = ({ onLoad, ...props }: AnimatedImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.img

      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onEnded={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
      {...props}
    />
  )
}
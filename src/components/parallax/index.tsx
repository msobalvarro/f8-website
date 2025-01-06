import logo from '@/assets/logo/F8_Horizontal_Logo.png'
import { useEffect, useRef, useState } from 'react'
import { BrandMarquee } from '../ui/marquee'

const MAX_FRAMES = 104

export const ParallaxFrames = () => {
  const [imageFrame, setFrame] = useState<string>('001')
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const MAX_SCROLL = ((scrollRef.current?.scrollHeight || 0) + (scrollRef.current?.clientHeight || 0))

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    const scrollFraction = (scrollY / MAX_SCROLL) * 2
    const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1

    if (Math.abs(frame) <= MAX_FRAMES) {
      setFrame(frame.toString().padStart(3, '0'))
    }
  }, [scrollY, MAX_SCROLL])

  return (
    <article ref={scrollRef} className='bg-white w-full relative overflow-hidden'>
      <img
        alt='Fortinet'
        className='w-16 md:w-32 lg:w-64 top-10 left-10 object-fit absolute'
        src={logo} />

      <img
        alt='Fortinet'
        className='object-fit w-screen'
        src={`/fortinet-frames/ezgif-frame-${imageFrame}.png`} />

      <BrandMarquee addClass='absolute left-0 bottom-0' />

    </article>
  )
}
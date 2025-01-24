import Marquee from 'react-fast-marquee'

import anydesk from '@/assets/brands/anydesk.svg'
import axis from '@/assets/brands/axis.svg'
import cablix from '@/assets/brands/cablix.svg'
import cisco from '@/assets/brands/cisco.svg'
import dahua from '@/assets/brands/dahua.svg'
import eset from '@/assets/brands/eset.svg'
import fortinet from '@/assets/brands/fortinet.svg'
import microsoft from '@/assets/brands/microsoft.svg'
import mikrotik from '@/assets/brands/mikrotik.svg'
import panduit from '@/assets/brands/panduit.svg'
import secolarmEnforcer from '@/assets/brands/secolarm-enforcer.svg'
import siemon from '@/assets/brands/siemon.svg'
import ubiquiti from '@/assets/brands/ubiquiti.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const brands = [
  anydesk,
  axis,
  cablix,
  cisco,
  dahua,
  eset,
  fortinet,
  microsoft,
  mikrotik,
  panduit,
  secolarmEnforcer,
  siemon,
  ubiquiti,
]

interface Props {
  addClass?: string
}

export const BrandMarquee = ({ addClass }: Props) => {
  return (
    <Marquee className={`p-10 overflow-hidden w-full ${addClass}`}>
      {brands.map((brand, index) => (
        <LazyLoadImage
          className='w-[96px] mx-10'
          key={index}
          src={brand}
          alt={`image ${index}`} />
      ))}
    </Marquee>
  )
}
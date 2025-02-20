import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider, { Settings } from 'react-slick'
import { imageOrigin, SERVER_URL } from '@/utils/constants'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { AnimatedImage } from '../ui/image'

interface Props {
  images: string[]
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const ProductSliderImage = ({ images }: Props) => {
  if (images.length === 1) {
    return (
      <PhotoProvider>
        <PhotoView src={`${imageOrigin}/${images[0]}`}>
          <AnimatedImage
            className='w-full h-96 object-cover'
            src={`${imageOrigin}/${images[0]}`}
            alt='product-image' />
        </PhotoView>
      </PhotoProvider>
    )
  }

  return (
    <PhotoProvider>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <PhotoView src={`${imageOrigin}/${image}`}>
              <AnimatedImage
                className='h-96 w-full object-cover rounded'
                src={`${imageOrigin}/${image}`}
                alt='product-image' />
            </PhotoView>
          </div>
        ))}
      </Slider>
    </PhotoProvider>
  )
}

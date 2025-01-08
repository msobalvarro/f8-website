import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider, { Settings } from 'react-slick'
import { SERVER_URL } from '@/utils/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { PhotoProvider, PhotoView } from 'react-photo-view'

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
        <PhotoView src={`${SERVER_URL}/images/${images[0]}`}>
          <LazyLoadImage
            className='w-full h-96 object-cover'
            src={`${SERVER_URL}/images/${images[0]}`}
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
            <PhotoView src={`${SERVER_URL}/images/${image}`}>
              <LazyLoadImage
                className='h-96 w-full object-cover rounded'
                src={`${SERVER_URL}/images/${image}`}
                alt='product-image' />
            </PhotoView>
          </div>
        ))}
      </Slider>
    </PhotoProvider>
  )
}

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import capMan from '../public/happy-young-man-wearing-cap-using-laptop-computer.jpg'
import bohemianMan from '../public//bohemian-man-with-his-arms-crossed.png'

const photos = [
  capMan,
  bohemianMan
]

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default function SwiperExample () {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      className='h-full w-full'
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {photos.map(photo => (
        
      <SwiperSlide
        key={photo.blurDataURL}
        // className='w-full h-full'
      >
        <Image
          src={photo}
          alt="a portrait photo of Emmanuel Smart"
          placeholder='blur'
          width={6000}
          height={5972}
          // style={{
          //   objectFit: 'cover',
          // }}
          
          priority
        />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};
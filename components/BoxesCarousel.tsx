import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface BoxData {
  title: string;
  subtitle: string;
}

interface BoxesCarouselProps {
  boxes: BoxData[];
}

const BoxesCarousel: React.FC<BoxesCarouselProps> = ({ boxes }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Se non è mobile, mostra il layout originale
  if (!isMobile) {
    return (
      <div className="boxes-container">
        {boxes.map((box, index) => (
          <div key={index} className="box">
            <div className="box-title">{box.title}</div>
            <div className="box-subtitle">{box.subtitle}</div>
          </div>
        ))}
      </div>
    );
  }

  // Su mobile, mostra il carosello
  return (
    <div className="boxes-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        className="swiper"
        style={{ height: 'auto' }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {boxes.map((box, index) => (
          <SwiperSlide key={index}>
            <div className="box">
              <div className="box-title">{box.title}</div>
              <div className="box-subtitle">{box.subtitle}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination">
        {boxes.map((_, index) => (
          <span
            key={index}
            className={`custom-bullet ${activeIndex === index ? 'active' : ''}`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxesCarousel;
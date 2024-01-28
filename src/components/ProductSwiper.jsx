import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./css/ProductSwiper.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductSwiper({images}) {
    console.log(images)
    const thumbsSwiper = useRef(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper.current }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                
            </Swiper>
            <Swiper
                onSwiper={swiper => thumbsSwiper.current = swiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images[0]} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

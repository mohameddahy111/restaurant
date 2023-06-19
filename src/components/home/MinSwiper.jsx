import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../../css/minswiper.css";

// import required modules
import { Autoplay } from "swiper";

export default function MinSwiper() {
  const resImag = [
    {
      src: "https://i.pinimg.com/564x/69/ce/91/69ce918553d265713ecc0bc79db9a540.jpg",
      alt: "image 1",
    },
    {
      src:'https://i.pinimg.com/564x/03/e5/52/03e5526e510d8e7a274c8ca159377151.jpg',
      alt: "image 2",
    },{
      src:'https://i.pinimg.com/564x/fc/f0/77/fcf0774b665ea9951a71503ef83b8930.jpg',
      alt: "image 3",
    }
  ]
  return (
    <>
      <Swiper spaceBetween={20} autoplay={true} modules={[Autoplay]} className="mySwiper">
        {
          resImag.map((x, i)=>(
        <SwiperSlide key={i}>
          <img src={x.src} alt={x.alt} />
        </SwiperSlide>

          ))
        }
      </Swiper>
    </>
  );
}

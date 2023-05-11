import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Tic from '../../img/tictactoe.png'
import Weather from '../../img/weather.png'
import Book from '../../img/paper.png'
import Moringa from '../../img/moringa.png'

export default function Portfolio() {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Tic} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Book} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Weather} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Moringa} alt='' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

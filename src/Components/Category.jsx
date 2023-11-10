import React from 'react';

import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img4 from "../assets/home/slide4.jpg"
import img5 from "../assets/home/slide5.jpg"

const Category = () => {
    return (
        <>
            <div className='my-10'>
                <div className=''>
                    <SectionTitle
                        heading="ORDER ONLINE"
                        subHeading="---From 11:00am to 10:00pm---"
                    >
                    </SectionTitle>

                </div>

                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                           
                                <img className='rounded-xl' src={img1} alt="" />
                                <p className="text-3xl uppercase -mt-16 text-center  text-white">Salads</p>
                           
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl' src={img2} alt="" />
                            <p className="text-3xl uppercase text-center -mt-16 text-white">Pizza</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl' src={img3} alt="" />
                            <p className="text-3xl uppercase text-center -mt-16 text-white">Soup</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl' src={img4} alt="" />
                            <p className="text-4xl uppercase text-center -mt-16 text-white">Desserts</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl' src={img5} alt="" />
                            <p className="text-3xl uppercase text-center -mt-16 text-white">Salads</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Category;
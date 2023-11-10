import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Popular = () => {
    const [popular, setPopular] = useState([])
    console.log(popular);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])
    return (
        <>
            <div>
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
                    {
                        popular.filter()
                    }
                    <SwiperSlide>Slide 1</SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Popular;
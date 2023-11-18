import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    console.log(reviews);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <div>
                <div>
                    <SectionTitle
                        heading={"TESTIMONIALS"}
                        subHeading={"---What Our Clients Say---"}
                    >

                    </SectionTitle>
                </div>

                <div>
                    {
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                            {
                                reviews.map(review => <SwiperSlide
                                    key={review._id}
                                >
                                    <div className="flex flex-col items-center mx-24 my-16">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <p className="py-8">{review.details}</p>
                                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    }
                </div>

            </div>
        </>
    );
};

export default Testimonial;
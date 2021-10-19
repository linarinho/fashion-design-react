import './review.scss';
import ReviewCard from '../../components/review-card/ReviewCard';

import review1 from './../../assets/pic-1.png';
import review2 from './../../assets/pic-2.png';
import review3 from './../../assets/pic-3.png';
import review4 from './../../assets/pic-4.png';
import review5 from './../../assets/pic-5.png';
import review6 from './../../assets/pic-6.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

const breakpoints = {
    100: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
}

function Review() {
    return (
        <section id="review" className="review">
            <h1 class="review-heading"> Client's <span>Review</span> </h1>

            <Swiper navigation={false} slidesPerView={2} spaceBetween={10} breakpoints={breakpoints} className="review-wrapper">
                <SwiperSlide>
                    <ReviewCard img={review1} name="Roberto Linares" desc="Happy Client" />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard img={review2} name="Lili martinez" desc="Good Client" />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard img={review3} name="Aniel Ovies" desc="Happy Client" />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard img={review4} name="Lena Rosaly" desc="Good Client" />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard img={review5} name="Enmanuel Alvarez" desc="Happy Client" />
                </SwiperSlide>

                <SwiperSlide>
                    <ReviewCard img={review6} name="Mayly benavides" desc="Good Client" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Review

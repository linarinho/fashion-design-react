import './featured.scss';
import ProductCard from '../../components/product-card/ProductCard';


import featured1 from './../../assets/product_img1.jpg';
import featured2 from './../../assets/product_img2.jpg';
import featured3 from './../../assets/product_img3.jpg';
import featured4 from './../../assets/product_img4.jpg';
import featured5 from './../../assets/product_img5.jpg';
import featured6 from './../../assets/product_img6.jpg';
import featured7 from './../../assets/product_img7.jpg';
import featured8 from './../../assets/product_img8.jpg';
import featured9 from './../../assets/product_img9.jpg';
import featured10 from './../../assets/product_img10.jpg';
import featured11 from './../../assets/product_img11.jpg';
import featured12 from './../../assets/product_img12.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

const breakpoints = {
    100: { slidesPerView: 1 },
    200: { slidesPerView: 1 },
    300: { slidesPerView: 1 },
    500: { slidesPerView: 1 },
    720: { slidesPerView: 2 },
    920: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
}

function Featured() {
    return (
        <section id="featured" className="featured">
            <h1 class="featured-heading"> Featured <span>Products</span> </h1>

            <Swiper navigation={true} slidesPerView={4} spaceBetween={15} breakpoints={breakpoints} className="featured-wrapper">
                <SwiperSlide>
                    <ProductCard img={featured8} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured6} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured1} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured5} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured3} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured7} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured2} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured4} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured12} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured9} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured11} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard img={featured10} amount="$30.00" cut="$25.00" affer="20% Off" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Featured

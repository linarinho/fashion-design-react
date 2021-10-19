import './blog.scss';
import BlogCard from '../../components/blog-card/BlogCard';

import blog1 from './../../assets/blog-1.jpg';
import blog2 from './../../assets/blog-2.jpg';
import blog3 from './../../assets/blog-3.jpg';
import blog4 from './../../assets/blog-4.jpg';
import blog5 from './../../assets/blog-5.jpg';

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
    920: { slidesPerView: 3 },
    1200: { slidesPerView: 3 }
}

function Blog() {
    const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impedit ad quos voluptate at repudiandae nemo tempora harum";

    return (
        <section id="blog" className="blog">
            <h1 class="blog-heading"> Our <span>Blogs</span> </h1>

            <Swiper navigation={true} slidesPerView={3} spaceBetween={10} breakpoints={breakpoints} className="blog-wrapper">
                <SwiperSlide>
                    <BlogCard img={blog1} title="Blog Title Goes Here" description={desc} date="19th May, 2021" user="User" />
                </SwiperSlide>

                <SwiperSlide>
                    <BlogCard img={blog2} title="Blog Title Goes Here" description={desc} date="1st May, 2021" user="User" />
                </SwiperSlide>

                <SwiperSlide>
                    <BlogCard img={blog3} title="Blog Title Goes Here" description={desc} date="3rd May, 2021" user="User" />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard img={blog4} title="Blog Title Goes Here" description={desc} date="25th May, 2021" user="User" />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard img={blog5} title="Blog Title Goes Here" description={desc} date="11th May, 2021" user="User" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Blog

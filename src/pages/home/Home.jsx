import './home.scss';
import img1 from './../../assets/banner1.jpg';
import img2 from './../../assets/banner2.jpg';
import img3 from './../../assets/banner3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'

// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

function Home() {

    return (
        <section className="home">
            <Swiper navigation={true} loop={true} className="home-wrapper">
                <SwiperSlide>
                    <div className="banner" style={{ backgroundImage: `url(${img1})` }}>
                        <div class="content">
                            <span>Upto 50% off</span>
                            <h3>Women's Fashion</h3>
                            <a href="#" class="btn">Shop now</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner" style={{ backgroundImage: `url(${img2})` }}>
                        <div class="content">
                            <span>Upto 50% off</span>
                            <h3>Women's Fashion</h3>
                            <a href="#" class="btn">Shop now</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner" style={{ backgroundImage: `url(${img3})` }}>
                        <div class="content">
                            <span>Upto 50% off</span>
                            <h3>Women's Fashion</h3>
                            <a href="#" class="btn">Shop now</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Home;

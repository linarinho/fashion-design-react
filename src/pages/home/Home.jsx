import './home.scss';
import img1 from './../../assets/banner1.jpg';
import img2 from './../../assets/banner2.jpg';
import img3 from './../../assets/banner3.jpg';
import SwiperInfo from './../../components/swiper-info/SwiperInfo';


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
        <section id="home" className="home">
            <Swiper navigation={true} loop={true} className="home-wrapper">
                <SwiperSlide>
                    <SwiperInfo img={img1} price="Upto 50% off" desc="Women's Fashion"/>  
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperInfo img={img3} price="Upto 50% off" desc="Kid's Fashion"/>
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperInfo img={img2} price="Upto 50% off" desc="Men's Fashion"/>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Home;

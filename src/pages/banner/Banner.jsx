import './banner.scss';
import BannerContent from '../../components/banner-content/BannerContent';

import banner1 from './../../assets/shop_banner_img1.jpg';
import banner2 from './../../assets/shop_banner_img2.jpg';

function Banner() {
    return (
        <section className="banner-container">
            <BannerContent img={banner1} sale="Super Sale" upto="Upto 50% Off"/>
            <BannerContent img={banner2} sale="Super Sale" upto="Upto 30% Off"/>
        </section>
    )
}

export default Banner

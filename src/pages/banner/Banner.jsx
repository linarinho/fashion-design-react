import './banner.scss';

import banner1 from './../../assets/shop_banner_img1.jpg';
import banner2 from './../../assets/shop_banner_img2.jpg';

function Banner() {
    return (
        <section className="banner-container">

            <div className="banner">
                <img src={banner1} alt="" />
                <div className="content">
                    <span>Super Sale</span>
                    <h3>Upto 50% off</h3>
                    <a href="#" class="btn">Shop Now</a>
                </div>
            </div>

            <div className="banner">
                <img src={banner2} alt="" />
                <div className="content">
                    <span>Super Sale</span>
                    <h3>Upto 50% Off</h3>
                    <a href="#" class="btn">Shop Now</a>
                </div>
            </div>          

        </section>
    )
}

export default Banner

import './swiper-info.scss';

function SwiperInfo({img, price, desc}) {
    return (
        <div className="home-swiper-slider" style={{ backgroundImage: `url(${img})` }}>
            <div class="content">
                <span>{ price }</span>
                <h3>{ desc }</h3>
                <a href="#" class="btn">Shop Now</a>
            </div>
        </div>
    )
}

export default SwiperInfo

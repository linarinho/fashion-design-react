import './banner-content.scss';

function BannerContent({ img, sale, upto }) {
    return (
        <div className="banner">
            <img src={img} alt="" />
            <div className="content">
                <span>{sale}</span>
                <h3>{upto}</h3>
                <a href="#" class="btn">Shop Now</a>
            </div>
        </div>
    )
}

export default BannerContent

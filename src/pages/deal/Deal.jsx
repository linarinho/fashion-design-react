import './deal.scss'

import img from './../../assets/tranding_img.png';

function Deal() {
    return (
        <section className="deal">
            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="content">
                <span>New Season Trends!</span>
                <h3>Best Summer Collection</h3>
                <p>Sale Get Up To 50% Off</p>
                <a href="#" class="btn">Shop Now</a>
            </div>
        </section>
    )
}

export default Deal

import './footer.scss';
import { ArrowForward, Facebook, Instagram, LinkedIn, Telegram, Twitter } from '@material-ui/icons'

function Footer() {
    return (
        <section className="footer">
            <div className="footer-links">
                <div className="about-us">
                    <h3 className="footer-title-links">About US</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        Pariatur officia rem nostrum dolores quam perferendis.
                    </p>
                </div>

                <div className="category">
                    <h3 className="footer-title-links">Category</h3>

                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Men
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Women
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Kids
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Best Seller
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            New Arrivals
                        </li>
                    </ul>
                </div>

                <div className="quick-links">
                    <h3 className="footer-title-links">Quick Links</h3>

                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Home
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>    
                            Products
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Featured
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Review
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Contact
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Blogs
                        </li>
                    </ul>
                </div>

                <div className="useful-links">
                    <h3 className="footer-title-links">Useful Links</h3>

                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            My Account
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            My Orders
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            My Listing
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Sell Now
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            Contact
                        </li>
                        <li className="footer-list-item">
                            <ArrowForward className="footer-list-item-icon"/>
                            New Offers
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-social-media">
                <Facebook className="footer-social-media-icon"/>
                <Twitter className="footer-social-media-icon"/>
                <Instagram className="footer-social-media-icon"/>
                <LinkedIn className="footer-social-media-icon"/>
                <Telegram className="footer-social-media-icon"/>
            </div>

            <div className="footer-info">
                <h3>Creted By <span>@Roberto Linares Zamora</span></h3>
            </div>

        </section>
    )
}

export default Footer

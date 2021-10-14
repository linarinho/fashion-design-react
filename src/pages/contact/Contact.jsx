import './contact.scss';
import { EmailOutlined, LocationOnOutlined, LocalPhoneOutlined } from '@material-ui/icons';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h1 class="contact-heading"> Contact <span>Us</span> </h1>

            <div className="contact-top">
                <div className="contact-card">
                    <LocationOnOutlined className="contact-card-icon" />
                    <h3>Address</h3>
                    <span>Jogeshwari, Mumbai, India, 400104</span>
                </div>
                <div className="contact-card">
                    <EmailOutlined className="contact-card-icon" />
                    <h3>Email</h3>
                    <span>shaikhanas@gmail.com</span>
                    <span>anasbhai@gmail.com</span>
                </div>
                <div className="contact-card">
                    <LocalPhoneOutlined className="contact-card-icon" />
                    <h3>Phone</h3>
                    <span>+ 123-456-7890</span>
                    <span>+ 111-222-3333</span>
                </div>
            </div>

            <div className="contact-bottom">

                <div className="contact-form">
                    <h1 class="contact-form-heading">Get In Touch</h1>

                    <form>
                        <div className="row">
                            <input class="contact-form-input" type="text" placeholder="Your Name" />
                            <input class="contact-form-input" type="text" placeholder="Your Email" />
                        </div>
                        <div className="row">
                            <input class="contact-form-input" type="text" placeholder="Your Number" />
                            <input class="contact-form-input" type="text" placeholder="Your Subject" />
                        </div>

                        <textarea class="contact-form-input" placeholder="Your Message" rows="7"/>

                        <a href="#" class="btn">Send Message</a>
                    </form>

                </div>

                <div className="contact-map">
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633431163028!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </section>
    )
}

export default Contact

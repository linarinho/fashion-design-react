import './blog-card.scss';
import { DateRange, Person } from '@material-ui/icons';

function BlogCard({ img, title, description, date, user }) {
    return (
        <div className="blog-card">
            <img src={img} alt="" />

            <div className="blog-card-body">
                <h3>{title}</h3>

                <p>{description}</p>

                <a href="#" class="btn">Read More</a>

                <div className="blog-card-body-detail">
                    <div className="blog-card-body-detail-info">
                        <DateRange className="blog-card-body-detail-info-icon" />
                        <span>{date}</span>
                    </div>
                    <div className="blog-card-body-detail-info">
                        <Person className="blog-card-body-detail-info-icon" />
                        <span>{user}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

import './review-card.scss';

function ReviewCard({img, name, desc}) {
    return (
        <div className="review-card">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam perferendis iste impedit saepe natus aliquid provident.
            </p>
            <div className="review-card-info">
                <img src={img} alt="" />

                <div className="info-contact">
                    <h3>{name}</h3>
                    <span>{desc}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard

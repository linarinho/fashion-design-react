import './product-card.scss';
import { FavoriteBorder, Search, ShoppingCart, StarRate, Visibility } from '@material-ui/icons';

function ProductCard({img, amount, cut, affer}) {
    return (
        <div className="product-card">
            <div class="icons">
                <ShoppingCart className="icon" />
                <FavoriteBorder className="icon" />
                <Search className="icon" />
                <Visibility className="icon" />
            </div>

            <img src={img} alt="" />

            <div className="card-body">
                <h3>Product Name</h3>
                <div class="price">
                    <div class="amount">{amount}</div>
                    <div class="cut">{cut}</div>
                    <div class="offer">{affer}</div>
                </div>

                <div className="rate">
                    <StarRate className="rate-icon"/>
                    <StarRate className="rate-icon"/>
                    <StarRate className="rate-icon"/>
                    <StarRate className="rate-icon"/>
                    <StarRate className="rate-icon"/>
                    <span>(50)</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

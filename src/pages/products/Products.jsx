import './products.scss';
import ProductCard from '../../components/product-card/ProductCard';

import product1 from './../../assets/product_img1.jpg';
import product2 from './../../assets/product_img2.jpg';
import product3 from './../../assets/product_img3.jpg';
import product4 from './../../assets/product_img4.jpg';
import product5 from './../../assets/product_img5.jpg';
import product6 from './../../assets/product_img6.jpg';
import product7 from './../../assets/product_img7.jpg';
import product8 from './../../assets/product_img8.jpg';
import product9 from './../../assets/product_img9.jpg';
import product10 from './../../assets/product_img10.jpg';
import product11 from './../../assets/product_img11.jpg';
import product12 from './../../assets/product_img12.jpg';

function Products() {
    return (
        <section id="products" className="products">
            <h1 class="products-heading"> Exclusive <span>Products</span> </h1>

            <div className="products-nav">
                <span className="products-nav-item active">All</span>
                <span className="products-nav-item">New Arrivals</span>
                <span className="products-nav-item">Best Sellers</span>
                <span className="products-nav-item">Featured</span>
                <span className="products-nav-item">Special Offer</span>
            </div>

            <div className="products-galery">
                <ProductCard img={product1} amount="$30.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product2} amount="$20.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product3} amount="$80.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product4} amount="$24.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product5} amount="$30.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product6} amount="$29.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product7} amount="$60.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product8} amount="$90.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product9} amount="$10.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product10} amount="$42.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product11} amount="$71.00" cut="$25.00" affer="20% Off"/>
                <ProductCard img={product12} amount="$69.00" cut="$25.00" affer="20% Off"/>
            </div>
        </section>
    )
}

export default Products

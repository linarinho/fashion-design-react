import './header.scss'
import { useState } from 'react';
import { Close, FavoriteBorder, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@material-ui/icons'

function Header() {
    const [activeSearch, setactiveSearch] = useState(false);
    const searchStyle = !activeSearch ? "header-search" : "header-search active";

    return (
        <header className="header">
            <div className="header-logo">
                <ShoppingCart className="icons-icon" />
                <span className="title">Shop</span>
            </div>

            <nav className="navegation">
                <a href="#home" className="navegation-item">Home</a>
                <a href="#products" className="navegation-item">Products</a>
                <a href="#featured" className="navegation-item">Featured</a>
                <a href="#review" className="navegation-item">Review</a>
                <a href="#contact" className="navegation-item">Contact</a>
                <a href="#blogs" className="navegation-item">Blogs</a>
            </nav>

            <div className="icons">
                <SearchOutlined className="icons-icon" onClick={() => setactiveSearch(!activeSearch)} />
                <ShoppingCartOutlined className="icons-icon" />
                <FavoriteBorder className="icons-icon" />
            </div>

            <div className={searchStyle}>
                <input className="search-input" type="text" placeholder="Search"/>
                <div className="search-icons">
                    <Close className="search-icon active" />
                    <SearchOutlined className="search-icon-big" />
                </div>
            </div>
        </header>
    )
}

export default Header;

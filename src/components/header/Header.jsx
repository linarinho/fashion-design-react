import './header.scss'
import { useState } from 'react';
/* import { NavLink } from 'react-router-dom'; */
import { Close, FavoriteBorder, SearchOutlined, ShoppingCart, ShoppingCartOutlined, FormatListBulleted } from '@material-ui/icons'

function Header() {
    const [activeSearch, setactiveSearch] = useState(false);
    const searchStyle = !activeSearch ? "header-search" : "header-search active";

    const [activeNevResponsive, setactiveNavResponsive] = useState(false);
    const navResponsiveStyle = !activeNevResponsive ? "navegation" : "navegation active";

    console.log(navResponsiveStyle);
    return (
        <header className="header">
            <div className="header-logo">
                <ShoppingCart className="icons-icon" />
                <span className="title">Shop</span>
            </div>

            <nav className={navResponsiveStyle}>
                {/* <NavLink exact to="/" className="navegation-item" activeClassName="active-items">Home</NavLink>
                <NavLink to="/products" className="navegation-item" activeClassName="active-items">Products</NavLink>
                <NavLink to="/featured" className="navegation-item" activeClassName="active-items">Featured</NavLink>
                <NavLink to="/review" className="navegation-item" activeClassName="active-items">Review</NavLink>
                <NavLink to="/contact" className="navegation-item" activeClassName="active-items">Contact</NavLink> 
                <NavLink to="/blog" className="navegation-item">Blogs</NavLink>*/}
                <a href="#home" className="navegation-item">Home</a>
                <a href="#products" className="navegation-item">Products</a>
                <a href="#featured" className="navegation-item">Featured</a>
                <a href="#review" className="navegation-item">Review</a>
                <a href="#contact" className="navegation-item">Contact</a>
                <a href="#blog" className="navegation-item">Blogs</a>
            </nav>

            <div className="icons">
                <FormatListBulleted className="icons-icon responsive" onClick={() => setactiveNavResponsive(!activeNevResponsive)} />
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

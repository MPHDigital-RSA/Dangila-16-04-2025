import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import menu from '../assets/Menu.svg'
import search from '../assets/Search.svg'
import cart from '../assets/Basket.svg'
import profile from '../assets/Profile.svg'


import '../styles/Navbar.css'
import MobileNav from './MobileNav'
import Search from './Search'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);

        if (isSearchOpen) {
            setIsSearchOpen(false);
        }
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className='wrapper header'>
            <nav className="nav">
                <img src={logo} alt="this is the Dangila logo" width='125' height='28' className='logo' />

                <ul className="desktop-menu">
                    <li><a href="#">products</a></li>
                    <li><a href="#">story</a></li>
                    <li><a href="#">manufacturing</a></li>
                    <li><a href="#">packaging</a></li>
                    <li><a href="#">team</a></li>
                </ul>

                <div className="search-cart-profile">
                    <img src={search} alt="search icon" width='18.75' height='18.75' onClick={handleSearchToggle} />
                    <div className='cart'>
                        <img src={cart} alt="cart icon" width='19.69' height='18.98' className='cart-image' />
                        <p className='cart-value'>0</p>
                    </div>
                    <img src={profile} alt="profile icon" width='17.5' height='19.75' />
                </div>

                <img src={menu} alt="menu icon" width='37.5' height='21.88' className='menu-icon' onClick={handleMenuToggle} />

                {/* CONDITIONALS */}

                {isMenuOpen && <MobileNav handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />}

                {isSearchOpen && <Search />}


            </nav>
        </header>
    )
}

export default NavBar

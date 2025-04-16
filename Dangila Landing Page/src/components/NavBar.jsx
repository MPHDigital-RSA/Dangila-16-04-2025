import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import menu from '../assets/Menu.svg'
import search from '../assets/Search.svg'
import cart from '../assets/Basket.svg'
import profile from '../assets/Profile.svg'
import close from '../assets/Close.svg'

import '../styles/Navbar.css'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearcOpen, setIsSearcOpen] = useState(false);


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

                {isMenuOpen && <ul className="mobile-menu">
                    <img src={close} alt="close button" className="close" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    <li><a href="#">products</a></li>
                    <li><a href="#">story</a></li>
                    <li><a href="#">manufacturing</a></li>
                    <li><a href="#">packaging</a></li>
                    <li><a href="#">team</a></li>
                </ul>}


                <div className="search-cart-profile">
                    <img src={search} alt="search icon" width='18.75' height='18.75' />
                    <img src={cart} alt="cart icon" width='19.69' height='18.98' />
                    <img src={profile} alt="profile icon" width='17.5' height='19.75' />
                </div>

                <img src={menu} alt="menu icon" width='37.5' height='21.88' className='menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />

            </nav>
        </header>
    )
}

export default NavBar

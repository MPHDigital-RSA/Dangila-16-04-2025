import React from 'react'
import close from '../assets/Close.svg'
import '../styles/MobileNav.css'


function MobileNav({ isMenuOpen, handleMenuToggle }) {
    return (
        <div>
            {isMenuOpen && <ul className="mobile-menu">
                <img src={close} alt="close button" className="close" onClick={handleMenuToggle} />
                <li><a href="#">products</a></li>
                <li><a href="#">story</a></li>
                <li><a href="#">manufacturing</a></li>
                <li><a href="#">packaging</a></li>
                <li><a href="#">team</a></li>
            </ul>}

        </div>
    )
}

export default MobileNav

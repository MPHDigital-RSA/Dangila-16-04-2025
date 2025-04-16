import React from 'react'
import HeroImage from '../assets/HeroBg.png'

import '../styles/Hero.css'

function Hero() {
    return (
        <div className='wrapper hero'>
            <div className="hero__text">
                <h1>dangila</h1>
                <p className="hero__subheading">Natural Inner Beauty</p>
                <p className="hero__description">
                    Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.
                </p>
                <button className='hero__button'>
                    <span>Buy Now</span>
                    <span>$49.99</span>
                </button>
            </div>

            <img src={HeroImage} alt="Dangula product image" className="hero__image" width='1130' height='775' />
        </div>
    )
}

export default Hero

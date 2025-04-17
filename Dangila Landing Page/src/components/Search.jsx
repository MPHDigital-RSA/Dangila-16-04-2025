import React from 'react'
import '../styles/Search.css'

function Search() {
    return (
        <div className='search-bg-area'>
            <div className='search-area'>
                <input type="text" placeholder='Search for products' className='search-input' />
                <button className='search-button'>Search</button>
            </div>

            <div className='searched-items-container'>
                <div className="searched-item">
                    <img src="src/assets/about-image.png" alt="searched item" className='searched-item-image' />
                    <div>
                        <p className='searched-item-name'>Dangila lotion 27</p>
                        <p className='searched-item-desc'>Removes dark marks and nature your skin for 24 hours.</p>
                        <button className='add-to-cart-button'>Add to Cart</button>
                    </div>
                </div>
                <div className="searched-item">
                    <img src="src/assets/about-image.png" alt="searched item" className='searched-item-image' />
                    <div>
                        <p className='searched-item-name'>Dangila lotion 27</p>
                        <p className='searched-item-desc'>Removes dark marks and nature your skin for 24 hours.</p>
                        <button className='add-to-cart-button'>Add to Cart</button>
                    </div>
                </div>
                <div className="searched-item">
                    <img src="src/assets/about-image.png" alt="searched item" className='searched-item-image' />
                    <div>
                        <p className='searched-item-name'>Dangila lotion 27</p>
                        <p className='searched-item-desc'>Removes dark marks and nature your skin for 24 hours.</p>
                        <button className='add-to-cart-button'>Add to Cart</button>
                    </div>
                </div>
                <div className="searched-item">
                    <img src="src/assets/about-image.png" alt="searched item" className='searched-item-image' />
                    <div>
                        <p className='searched-item-name'>Dangila lotion 27</p>
                        <p className='searched-item-desc'>Removes dark marks and nature your skin for 24 hours.</p>
                        <button className='add-to-cart-button'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

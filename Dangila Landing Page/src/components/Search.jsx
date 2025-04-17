import React, { useState, useEffect } from 'react'
import '../styles/Search.css'

import itemsData from '../data/itemsData'

function Search() {
    const [items, setItems] = useState(itemsData)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredItems = itemsData.filter(item => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setItems(filteredItems)
    }, [searchTerm])

    return (
        <div className='search-bg-area'>
            <div className='search-area'>
                <input type="text" placeholder='Search for products' className='search-input' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                <button className='search-button'>Search</button>
            </div>

            <div className='searched-items-container'>
                {items.map((item, index) => (
                    <div className="searched-item" key={index}>
                        <img src={item.image} alt={`${item.name} icon`} className='searched-item-image' />
                        <div className='searched-item-desc-container'>
                            <p className='searched-item-name'>{item.name}</p>
                            <p className='searched-item-desc'>{item.description}</p>
                            <button className='add-to-cart-button'>Add to Cart : R{item.price}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search

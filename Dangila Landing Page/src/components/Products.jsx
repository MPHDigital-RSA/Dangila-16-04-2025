import React from 'react'
import '../styles/Products.css'
import { products } from '../data/data'

function Products() {
    return (
        <div className='wrapper products'>
            <h2 className='products__heading'>our products</h2>

            <div className="products__item-container">
                {products.map((item) => (
                    <div className="products__item" key={item.id}>
                        <div className="products__item-icon-container">
                            <img src={item.image} alt={`${item.title} icon`} className='products__item-icon' />
                        </div>
                        <h3 className='products__item-title'>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products

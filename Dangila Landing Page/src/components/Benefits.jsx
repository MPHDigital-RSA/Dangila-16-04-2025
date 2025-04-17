import React from 'react'
import { benefits } from '../data/data'
import '../styles/Benefits.css'

function Benefits() {
    return (
        <div className='wrapper benefits'>
            <h2 className='benefits__heading'>Why dangila?</h2>
            <p className='benefits__description'>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
                is whatever it. Farther be chapter at visited married in it pressed.</p>

            <div className='benefits__items-container'>
                {benefits.map((item) => (
                    <div className='benefits__item' key={item.id}>
                        <img src={item.image} alt={`${item.heading} icon`} />
                        <h3 className='benefits__item-heading'>{item.heading}</h3>
                        <p className='benefits__item-description'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Benefits

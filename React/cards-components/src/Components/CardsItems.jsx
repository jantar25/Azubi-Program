import React from 'react'
import './CardsItems.css'

import Item from './Item/Item'
import data from '../data'

const CardsItems = () => {
  return (
    <div className='cards-container'>
        {data.map(card => (
            <div key={card.id}>
                <Item card={card} />
            </div>
        ))}
    </div>
  )
}

export default CardsItems
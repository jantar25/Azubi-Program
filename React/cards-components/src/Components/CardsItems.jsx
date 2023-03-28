import React from 'react'
import './CardsItems.css'

import Item from './Item/Item'
import data from '../data'

const CardsItems = () => {
  return (
    <div className='cards-container'>
        {data.map(card => <Item key={card.id} card={card} />)}
    </div>
  )
}

export default CardsItems
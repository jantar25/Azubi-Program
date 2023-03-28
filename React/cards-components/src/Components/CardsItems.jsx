import React from 'react'

import Item from './Item/Item'
import data from '../data'

const CardsItems = () => {
  return (
    <div>
        {data.map(card => (
            <div key={card.id}>
                <Item card={card} />
            </div>
        ))}
    </div>
  )
}

export default CardsItems
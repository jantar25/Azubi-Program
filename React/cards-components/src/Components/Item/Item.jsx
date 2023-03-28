import React from 'react'

import './Item.css'

const Item = ({card}) => {
  return (
    <div className='card-container'>
        <img src={card.icon} alt={card.title} />
        <h2 className='title'>{card.title}</h2>
        <p className='description'>{card.description}</p>
        <button>Learn More</button>
    </div>
  )
}

export default Item
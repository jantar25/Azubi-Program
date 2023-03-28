import React from 'react'

import './Item.css'

const Item = ({card}) => {
  return (
    <div 
    className={`card-conatiner ${card.title === 'SEDANS'?
    'sedans' : card.title === 'SUVS'?
    'suvs' : 'luxury'}`} >
        <img src={card.icon} alt={card.title} />
        <h2 className='title'>{card.title}</h2>
        <p className='description'>{card.description}</p>
        <button 
          className={card.title === 'SEDANS'?
            'sedansBtn' : card.title === 'SUVS'?
            'suvsBtn' : 'luxuryBtn'}>
              Learn More
        </button>
    </div>
  )
}

export default Item
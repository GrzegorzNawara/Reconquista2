import React from 'react'
import Card from './Card'

const Cards = ({visible, cards, onClick}) => (
  <div className="container">
    {visible &&
      <div className="row">
        {cards.map( card =>
            <Card
              key={card.id}
              my_card={card}
              onClick={() => onClick(card)}
            />
      )}
    </div>}
  </div>
)

export default Cards

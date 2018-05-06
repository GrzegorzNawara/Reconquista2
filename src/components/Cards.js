import React from 'react'
import Card from './Card'

const Cards = ({visible, cards, onClick}) => (
  <div className="my-hand">
    {visible &&
      <div className="row my-cards">
        {cards.map( card =>
            <Card
              key={'hand'+card.index}
              my_card={card}
              onClick={() => onClick(card)}
            />
      )}
    </div>}
  </div>
)

export default Cards

import React from 'react'
import Card from './Card'

const Cards = ({visible, choosen_card, cards, onClick}) => (
  <div className="my-hand">
    {visible &&
      <div className="row my-cards">
        {cards.map( card =>
            <Card
              key={'hand'+card.index}
              choosen_card={(choosen_card===card.index)?1:0}
              my_card={card}
              onClick={() => onClick(card)}
            />
      )}
    </div>}
  </div>
)

export default Cards

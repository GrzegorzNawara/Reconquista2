import React from 'react'
import { keyframes } from 'styled-components'
//import debug from '../include/debug'


const Card = ({my_card, choosen_card, onChoosenClick, onClick}) => {

  const translateFrames = keyframes`
    from { transform: translate(-500px,200px); }
    to { transform: translate(0,0); }
  `;

  return (
    <div
      className="my-card"
      onClick={(choosen_card===1)?onChoosenClick:onClick}
      style={{animationName:translateFrames, animationDuration:'0.5s', left:'20px', top:(20-140*choosen_card)+'px'}}>
        <img className='my-card-bg-image' src='./images/card-base.png' alt=""></img>
        <img className='my-card-corner-image' src={my_card.corner_image} alt=""></img>
        <div className='my-card-header'>{my_card.header}</div>
        <img className='my-card-mid-image' src={my_card.mid_image} alt=""></img>
        <div className='my-card-text-box'><div className='my-card-text'>{my_card.text}</div></div>
    </div>
  )
}

export default Card

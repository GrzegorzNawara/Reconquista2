import React from 'react'
import { keyframes } from 'styled-components'
//import debug from '../include/debug'


const Card = ({my_card, onClick}) => {

  const translateFrames = keyframes`
    from { transform: translate(1000px,0); }
    to { transform: translate(0,0); }
  `;

  return (
    <div
      className="my-card"
      onClick={onClick}
      style={{animationName:translateFrames, animationDuration:'0.5s', left:'20px', top:'80px'}}>
        <img className='my-card-corner-image' src={my_card.corner_image} alt=""></img>
        <div className='my-card-header'>{my_card.header}</div>
        <img className='my-card-mid-image' src={my_card.mid_image} alt=""></img>
        <div className='my-card-text-box'><div className='my-card-text'>{my_card.text}</div></div>
    </div>
  )
}

export default Card

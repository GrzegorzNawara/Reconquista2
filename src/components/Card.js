import React from 'react'
import { keyframes } from 'styled-components'
//import debug from '../include/debug'


const Card = function ({my_image, onClick}) {

  const translateFrames = keyframes`
    from { transform: translate(1000px,0); }
    to { transform: translate(0,0); }
  `;

  return (
      <div
        className="my-card"
        onClick={onClick} 
        style={{position:'absolute', animationName:translateFrames, animationDuration:'1.5s', right:'10px', top:'100px'}}>
        <img className='my-card-corner-image' src='./images/card-corner-big-y.png' alt=""></img>
        <div className='my-card-header'>Król</div>
        <img className='my-card-mid-image' src='./images/card-mid-move.png' alt=""></img>
        <div className='my-card-text'>Możesz się poruszyć, albo spalić tą kartę</div>
      </div>
  )
}

export default Card

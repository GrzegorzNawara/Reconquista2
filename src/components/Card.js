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
        className="card"
        style={{position:"absolute", animationName:translateFrames, animationDuration:'1.5s', right:'10px', top:'100px'}}>
        <img onClick={onClick} className="card-image" src={my_image} alt=""></img>
      </div>
  )
}

export default Card

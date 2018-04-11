import React from 'react'
import { keyframes } from 'styled-components'
//import debug from '../include/debug'


const Card = function ({my_image, onClick}) {

  const translateFrames = keyframes`
    from { transform: translate(10px,100px); }
    to { transform: translate(0,0); }
  `;

  return (
      <div
        className="card"
        style={{position:"absolute", animationName:translateFrames, animationDuration:'1s', left:'10px', top:'20px'}}>
        <img className="piece-image" src={my_image} alt=""></img>
        <div onClick={onClick} className="piece-active-zone"></div>
      </div>
  )
}

export default Card

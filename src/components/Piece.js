import React from 'react'
import { keyframes } from 'styled-components'
//import debug from '../include/debug'


const Piece = function ({id, my_piece_id, my_image, show_bulb, old_pos, pos, onClick}) {

  const translateFrames = keyframes`
    from { transform: translate(${-pos.x+old_pos.x}px, ${-pos.y+old_pos.y}px); }
    to { transform: translate(0,0); }
  `;

  return (
      <div
        id={id}
        className="piece"
        style={{position:"absolute", animationName:translateFrames, animationDuration:'1s', left:pos.x, top:pos.y}}>
        {show_bulb==='me' && <img className="piece-bulb" src={'./images/user-bulb1.png'} alt=""></img>}
        {show_bulb==='choosen' && <img className="piece-bulb" src={'./images/user-bulb.png'} alt=""></img>}
        <img className="piece-image" src={my_image} alt=""></img>
      </div>
  )
}
//<div onClick={onClick} className="piece-active-zone"></div>
export default Piece

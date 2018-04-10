import React from 'react'
//import debug from '../include/debug'

const Arrow = ({id, my_image, pos, onClick}) => (
  <div
    id={id}
    className="arrow_piece"
    style={{position:"absolute", left:pos.x, top:pos.y}}>
    <img className="piece-image" src={my_image} alt=""></img>
    <div onClick={onClick} className="piece-active-zone"></div>
  </div>
  )

export default Arrow

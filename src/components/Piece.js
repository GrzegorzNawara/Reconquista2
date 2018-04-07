import React from 'react'
//import debug from '../include/debug'

const Piece = ({id, my_image, pos, onClick}) => (
  <div
    id={id}
    className="piece"
    style={{position:"absolute", left:pos.x, top:pos.y}}
    onClick={onClick}>
    <img src={my_image} alt=""></img>
  </div>
)

export default Piece

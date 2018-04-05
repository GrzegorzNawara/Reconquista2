import React from 'react'
//import debug from '../include/debug'

const Piece = ({my_image, x, y}) => (
  <div >
    <img src={my_image} alt="" style={{position:"absolute", left:x, top:y}}></img>
  </div>
)

export default Piece

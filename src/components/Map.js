import React from 'react'
import Piece from './Piece'
//import debug from '../include/debug'

const Map = ({pieces}) => (
  <div className="container bg-map" style={{position:'relative', backgroundPosition:'-600px -500px'}}>
    {pieces.map( piece =>
        <Piece
          key={piece.piece_id}
          my_image={piece.image}
          x={piece.x}
          y={piece.y}
        />
    )}
  </div>
)

export default Map

import React from 'react'
//import debug from '../include/debug'

const BurnButton = ({card_type, onClick}) => (
  <div
    className="burn-button"
    style={{position:"absolute", right:'20px', bottom:'20px'}}>
    <img
      onClick={onClick} 
      src={(card_type==='MOVE_PIECE')?'./images/burn-button.png':'./images/next-button.png'}
      alt=""></img>
  </div>
)

export default BurnButton

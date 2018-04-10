import React from 'react'
//import debug from '../include/debug'

const BurnButton = ({onClick}) => (
  <div
    className="burn-button"
    style={{position:"absolute", right:'20px', bottom:'20px'}}>
    <img onClick={onClick} src={'./images/burn-button.png'} alt=""></img>
  </div>
)

export default BurnButton

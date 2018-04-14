import React from 'react'
//import debug from '../include/debug'

const BurnButton = ({onClick}) => (
  <div className="burn-button">
    <img onClick={onClick} src='./images/burn-button.png' alt=''/>
  </div>
)

export default BurnButton

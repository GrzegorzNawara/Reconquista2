import React from 'react'
//import debug from '../include/debug'

const NextButton = ({onClick}) => (
  <div className="burn-button">
    <img onClick={onClick} src='./images/next-button.png' alt=''/>
  </div>
)

export default NextButton

import React from 'react'
import debug from '../include/debug'

const CountdownTimer = ({delay}) => (
  <div>
    {delay>1 && <div className="wait-button" style={{animationDuration:debug(delay,'DELAY')+'s'}}>
      <img src='./images/wait-button.png' alt=''/>
      <div className="cdwn-wrapper">
        <div className="cdwn-spinner cdwn-pie" style={{animationDuration:delay+'s'}}></div>
        <div className="cdwn-filler cdwn-pie"></div>
        <div className="cdwn-mask"></div>
      </div>
    </div>}
  </div>
)

export default CountdownTimer

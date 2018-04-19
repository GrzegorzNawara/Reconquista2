import React from 'react'

const Footer = ({war_points, happy_points, burnt_points, my_role}) => (
  <div className='my-footer'>
    <div className="my-footer-bg align-items-center p-2 px-md-2">
      <div className="row">
        <div className="col-3 text-center"><span className="h1">{war_points}</span><img alt="" src="images/score-icon2.png" /></div>
        <div className="col-3 text-center"><span className="h1">{happy_points}</span><img alt="" src="images/score-icon3.png" /></div>
        <div className="col-3 text-center"><span className="h1">{burnt_points}</span><img alt="" src="images/score-icon1.png" /></div>
        <div className="col-3 text-center"></div>
      </div>
    </div>
  </div>
)

export default Footer

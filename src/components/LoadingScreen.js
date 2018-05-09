import React from 'react'
//import debug from '../include/debug'

const LoadingScreen = ({ visible=true, logo, title }) => (
  (visible) ? (
    <div className="loading-screen">
      <img className='loading-screen-logo' src={logo} alt=""></img>
      <div><img className='loading-screen-loading-gif' src='./images/loading.gif' alt=""></img></div>
    </div>
  ) : null
)

export default LoadingScreen

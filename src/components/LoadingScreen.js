import React from 'react'
import debug from '../include/debug'

const LoadingScreen = ({ visible=true, logo, title }) => (
  (debug(visible,'VISIBLE')) ? (
    <div className="loading-screen justify-content-right align-items-center">
      <img className='loading-screen-logo' src={debug(logo,'LOGO')} alt=""></img>
      <h4>{title}</h4>
    </div>
  ) : null
)

export default LoadingScreen

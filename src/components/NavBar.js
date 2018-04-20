import React from 'react'

//<a className="navbar-brand my-0 mr-md-auto" href="#test" title="logo"><img id="logo" alt="logo" src="images/logo-dark.png"></img></a>

const NavBar = ({visible, my_role}) => (
  <div>{visible &&
    <div className='my-navbar fixed-top'>
      <div className="align-items-center p-3 px-md-4">
        <div className="col-3 text-left"><span className="h3">{my_role}</span></div>
  </div></div>}</div>
)

export default NavBar

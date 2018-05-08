import React from 'react'

//<a className="navbar-brand my-0 mr-md-auto" href="#test" title="logo"><img id="logo" alt="logo" src="images/logo-dark.png"></img></a>

const NavBar = ({visible, my_role, onCobClick}) => (
  <div>{visible &&
    <div className='my-navbar fixed-top'>
      <div className="align-items-center p-3 px-md-4 text-nowrap">
        <div className="row">
          <span className="col text-left">
            <span className="my-navbar-header h3"><img className="" id="me-bulb" alt="me" src="images/user-bulb1.png"></img>{my_role}</span>
          </span>
          <span className="col text-right"><img className="cob-image" onClick={onCobClick} alt="" src="images/cob.png"></img></span>
        </div>
  </div>

</div>}</div>
)

export default NavBar

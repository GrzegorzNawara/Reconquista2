import React from 'react'
import nonul from '../include/nonul'

const Footer = ({mymap}) => (
  <div className='my-footer'>
    <div className="align-items-center p-3 px-md-4 bg-white">
      {nonul(mymap.show_info_piece).piece_id}
    </div>
  </div>
)

export default Footer

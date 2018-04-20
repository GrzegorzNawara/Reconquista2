import React from 'react'

const ListItem = ({ title, subtitle, onClick}) => (
  <div className="col-12 rounded bg-warning px-3 py-3 my-2 justify-content-right align-items-center"
    onClick={e => {
        e.stopPropagation(); // preserve click outside for modal
        onClick();
      }}>
    <h4>{title}</h4>
    <div className=''>{subtitle.map( (text, ii) =>
         <div key={title+ii}>{text}</div>
    )}</div>
  </div>
)

export default ListItem

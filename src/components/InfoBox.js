import React from 'react'

const InfoBox = ({ visible=true, title, content }) => (
  (visible) ? (
    <div className="info-box rounded justify-content-right align-items-center">
      <h4>{title}</h4>
      <div className=''>{content.map( (text, ii) =>
           <div key={title+ii}>{text}</div>
      )}</div>
    </div>
  ) : null
)

export default InfoBox

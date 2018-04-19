import React from 'react'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div id='my-container' className="container">
    <NavBarWithData />
    <MapWithPieces />
  </div>
)

export default App

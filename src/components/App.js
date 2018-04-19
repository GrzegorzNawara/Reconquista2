import React from 'react'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div className="container-fluid">
    <NavBarWithData />
    <MapWithPieces />
  </div>
)

export default App

import React from 'react'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'
import ChooseScenario from '../connectors/ChooseScenario'

const App = () => (
  <div id='my-container' className="container">
    <NavBarWithData />
    <ChooseScenario />
    <MapWithPieces />
  </div>
)

export default App

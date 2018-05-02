import React from 'react'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'
import ChooseScenario from '../connectors/ChooseScenario'
import FooterWithData from '../connectors/FooterWithData'
import ActionControlsWithData from '../connectors/ActionControlsWithData'

const App = () => (
  <div>
    <ChooseScenario />
    <div id='my-container' className="container">
      <NavBarWithData />
      <MapWithPieces />
      <FooterWithData />
      <ActionControlsWithData />
    </div>
  </div>
)

export default App

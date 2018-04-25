import React from 'react'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'
import ChooseScenario from '../connectors/ChooseScenario'
import FooterWithData from '../connectors/FooterWithData'
import ActionControlsWithData from '../connectors/ActionControlsWithData'

const App = () => (
  <div id='my-container' className="container">

    <NavBarWithData />
    <ChooseScenario />
    <MapWithPieces />
    <FooterWithData />
    <ActionControlsWithData />
  </div>
)

export default App

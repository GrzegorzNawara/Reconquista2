import React from 'react'
import Fullscreen from '../components/Fullscreen'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'
import ChooseScenario from '../connectors/ChooseScenario'
import FooterWithData from '../connectors/FooterWithData'
import ActionControlsWithData from '../connectors/ActionControlsWithData'
import CardsWithData from '../connectors/CardsWithData'

const App = () => (
  <div>
    <ChooseScenario />
    <div id='my-container' className="container">
      <NavBarWithData />
      <MapWithPieces />
      <FooterWithData />
      <ActionControlsWithData />
      <CardsWithData />
    </div>
    <Fullscreen />
  </div>
)

export default App

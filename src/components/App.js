import React from 'react'
import Fullscreen from '../components/Fullscreen'
import NavBarWithData from '../connectors/NavBarWithData'
import MapWithPieces from '../connectors/MapWithPieces'
import ChooseScenario from '../connectors/ChooseScenario'
import FooterWithData from '../connectors/FooterWithData'
import ActionControlsWithData from '../connectors/ActionControlsWithData'
import CardsWithData from '../connectors/CardsWithData'
import InfoBoxWithData from '../connectors/InfoBoxWithData'
import LoadingScreenWithData from '../connectors/LoadingScreenWithData'


const App = () => (
  <div>
    <LoadingScreenWithData />
    <ChooseScenario />
    <div id='my-container' className="container">
      <NavBarWithData />
      <InfoBoxWithData />
      <MapWithPieces />
      <CardsWithData />
      <FooterWithData />
      <ActionControlsWithData />
    </div>
    <Fullscreen />
  </div>
)

export default App

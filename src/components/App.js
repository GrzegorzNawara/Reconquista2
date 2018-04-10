import React from 'react'
import NavBar from './NavBar'
import BurnButton from './BurnButton'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div className="container-fluid">
    <NavBar />
    <MapWithPieces />
    <BurnButton />
  </div>
)

export default App

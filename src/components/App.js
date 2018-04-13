import React from 'react'
import NavBar from './NavBar'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div className="container-fluid">
    <NavBar />
    <MapWithPieces />
  </div>
)

export default App

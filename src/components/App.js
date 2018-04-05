import React from 'react'
import NavBar from './NavBar'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div>
    <NavBar />
    <MapWithPieces />
    <NavBar />
  </div>
)

export default App

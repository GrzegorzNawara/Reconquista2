import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MapWithPieces from '../connectors/MapWithPieces'

const App = () => (
  <div className="container-fluid">
    <NavBar />
    <MapWithPieces />
    <Footer />
  </div>
)

export default App

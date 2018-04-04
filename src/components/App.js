import React from 'react'
import NavBar from './NavBar'
import Piece from './Piece'

const App = () => (
  <div>

    <NavBar />
    <div className="container bg-map" style={{position:'relative', backgroundPosition:'-600px -500px'}}>
      <Piece my_image={"./images/iso-big-r.png"} x={200} y={-50} />
      <Piece my_image={"./images/iso-small-y.png"} x={100} y={200} />
      <Piece my_image={"./images/iso-small-y.png"} x={400} y={600} />
    </div>
    <NavBar />

  </div>
)

export default App

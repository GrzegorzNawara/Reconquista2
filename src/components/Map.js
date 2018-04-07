import React, {Component} from 'react'
import Piece from './Piece'
import debug from '../include/debug'

const TILE_WIDTH_HALF=42;
const TILE_HEIGHT_HALF=30;

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  grid2iso = (center,{x,y}) => ({
    x: Math.round(this.state.width/2-110+(-center.x+x-3*(-center.y+y))*TILE_WIDTH_HALF),
    y: Math.round(this.state.height/2-63+(-center.x+x+3*(-center.y+y))*TILE_HEIGHT_HALF)
  })

  render(){
    return(
      <div className="bg-map mx-0"
        style={{
        backgroundPosition: (this.grid2iso(this.props.mymap.center,{x:0,y:0}).x-680)+'px '
        +(this.grid2iso(this.props.mymap.center,{x:0,y:0}).y-355)+'px'}}>
        {this.props.mymap.pieces.map( piece =>
            <Piece
              key={piece.piece_id}
              id={piece.piece_id}
              my_image={piece.image}
              pos={this.grid2iso(this.props.mymap.center,piece.pos)}
              onClick={() => this.props.onClick(piece)}
            />
        )}
      </div>
  )}
}

export default Map

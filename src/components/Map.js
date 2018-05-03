import React, {Component} from 'react'
import Piece from './Piece'
//import debug from '../include/debug'

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
    this.setState({ width: document.getElementById('my-container').offsetWidth, height: window.innerHeight });
  }

  grid2iso = (center,{x,y},slide={x:0,y:0}) => ({
    x: Math.round(this.state.width/2-110+(-center.x+slide.x+x-3*(-center.y+slide.y+y))*TILE_WIDTH_HALF),
    y: Math.round(this.state.height/2-63+(-center.x+slide.x+x+3*(-center.y+slide.y+y))*TILE_HEIGHT_HALF)
  })

  render(){
    if(this.props.mymap.scenario_choosen===0)
      return false;

    return(
      <div className="bg-map" style={{
        backgroundPosition: (this.grid2iso(this.props.mymap.center,{x:0,y:0}).x-670)+'px '
        +(this.grid2iso(this.props.mymap.center,{x:0,y:0}).y-335)+'px'}}>


        {this.props.mymap.pieces.map( piece =>
            <Piece
              key={piece.piece_id}
              id={piece.piece_id}
              my_piece_id={this.props.mymap.my_piece_id}
              my_image={piece.image}
              show_choosen_bulb={(this.props.mymap.choosen_piece_index===piece.index)?piece.piece_height:0}
              show_me_bulb={(this.props.mymap.my_piece_id===piece.piece_id)?piece.piece_height:0}
              old_pos={this.grid2iso(this.props.mymap.center,piece.old_pos)}
              pos={this.grid2iso(this.props.mymap.center,piece.pos)}
              onClick={() => this.props.onClick(piece)}
            />
        )}

      </div>
  )}
}

export default Map

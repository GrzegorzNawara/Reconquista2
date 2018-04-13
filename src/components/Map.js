import React, {Component} from 'react'
import Piece from './Piece'
import Arrow from './Arrow'
import Card from './Card'
import BurnButton from './BurnButton'
import FooterWithData from '../connectors/FooterWithData'
//import debug from '../include/debug'
import nonul from '../include/nonul'

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

  grid2iso = (center,{x,y},slide={x:0,y:0}) => ({
    x: Math.round(this.state.width/2-110+(-center.x+slide.x+x-3*(-center.y+slide.y+y))*TILE_WIDTH_HALF),
    y: Math.round(this.state.height/2-63+(-center.x+slide.x+x+3*(-center.y+slide.y+y))*TILE_HEIGHT_HALF)
  })

  render(){
    return(
      <div className="bg-map mx-0"
        style={{
        backgroundPosition: (this.grid2iso(this.props.mymap.center,{x:0,y:0}).x-680)+'px '
        +(this.grid2iso(this.props.mymap.center,{x:0,y:0}).y-355)+'px'}}>

        {this.props.mymap.choosen_piece_index>-1 &&
          this.props.mymap.pieces[this.props.mymap.choosen_piece_index].can_move===1 &&
          nonul(this.props.mymap.cards[this.props.mymap.actual_card_index]).card_type==='MOVE_PIECE' &&
          <div>
            <Arrow
              key='arrow-n'
              id='arrow-n'
              my_image='./images/iso-arrow-n.png'
              pos={this.grid2iso(
                this.props.mymap.center,
                this.props.mymap.pieces[this.props.mymap.choosen_piece_index].pos,
                {x:0, y:-0.75}
              )}
              onClick={() => this.props.onClickMoveNorth(this.props.mymap.pieces[this.props.mymap.choosen_piece_index])}
            />
            <Arrow
              key='arrow-s'
              id='arrow-s'
              my_image='./images/iso-arrow-s.png'
              pos={this.grid2iso(
                this.props.mymap.center,
                this.props.mymap.pieces[this.props.mymap.choosen_piece_index].pos,
                {x:0, y:0.6}
              )}
              onClick={() => this.props.onClickMoveSouth(this.props.mymap.pieces[this.props.mymap.choosen_piece_index])}
            />
          </div>
        }

        {this.props.mymap.pieces.map( piece =>
            <Piece
              key={piece.piece_id}
              id={piece.piece_id}
              my_image={piece.image}
              old_pos={this.grid2iso(this.props.mymap.center,piece.old_pos)}
              pos={this.grid2iso(this.props.mymap.center,piece.pos)}
              onClick={() => this.props.onClick(piece)}
            />
        )}

      {nonul(this.props.mymap.cards[this.props.mymap.actual_card_index]).card_type==='SHOW_CARD' &&
        <Card
          my_card={this.props.mymap.cards[this.props.mymap.actual_card_index]}
          onClick={this.props.onClickBurnButton} />
      }
      <FooterWithData />
      <BurnButton
        card_type={nonul(this.props.mymap.cards[this.props.mymap.actual_card_index]).card_type}
        onClick={this.props.onClickBurnButton} />
      </div>
  )}
}

export default Map

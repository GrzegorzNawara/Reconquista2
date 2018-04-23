import React, {Component} from 'react'
import Piece from './Piece'
import Arrow from './Arrow'
import Card from './Card'
import BurnButton from './BurnButton'
import NextButton from './NextButton'
import FooterWithData from '../connectors/FooterWithData'
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
      <div className="bg-map mx-0"
        style={{
        backgroundPosition: (this.grid2iso(this.props.mymap.center,{x:0,y:0}).x-670)+'px '
        +(this.grid2iso(this.props.mymap.center,{x:0,y:0}).y-335)+'px'}}>

        {this.props.mymap.action_buttons_visible===1 &&
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
        }

        {this.props.mymap.pieces.map( piece =>
            <Piece
              key={piece.piece_id}
              id={piece.piece_id}
              my_piece_id={this.props.mymap.my_piece_id}
              my_image={piece.image}
              show_bulb={(this.props.mymap.my_piece_id===piece.piece_id)?'me':''}
              old_pos={this.grid2iso(this.props.mymap.center,piece.old_pos)}
              pos={this.grid2iso(this.props.mymap.center,piece.pos)}
              onClick={() => this.props.onClick(piece)}
            />
        )}

        {this.props.mymap.action_buttons_visible===1 &&
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
        }

      {this.props.mymap.cards.length>0 && this.props.mymap.actual_card_index>=0 && this.props.mymap.cards[this.props.mymap.actual_card_index].visible===1 &&
        <Card  my_card={this.props.mymap.cards[this.props.mymap.actual_card_index]}
          onClick={this.props.onClickNextButton} />
      }
      <FooterWithData />

      {this.props.mymap.action_buttons_visible===1 &&
        (this.props.mymap.cards[this.props.mymap.actual_card_index].card_type==='MOVE_PIECE_CARD')
        ?<BurnButton  onClick={this.props.onClickBurnButton} />
        :<NextButton  onClick={this.props.onClickNextButton} />
      }
      </div>
  )}
}

export default Map

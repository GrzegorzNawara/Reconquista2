import React, {Component} from 'react'
import Arrow from './Arrow'
import Card from './Card'
import BurnButton from './BurnButton'
import NextButton from './NextButton'
import CountdownTimerWithDelay from '../connectors/CountdownTimerWithDelay'
//import debug from '../include/debug'

const TILE_WIDTH_HALF=42;
const TILE_HEIGHT_HALF=30;

class ActionControls extends Component {

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
      <div>
        <div className="action-controls">

        {this.props.mymap.action_buttons_visible===1 &&
          <Arrow
            key='arrow-s'
            id='arrow-s'
            my_image='./images/iso-arrow-s.png'
            pos={this.grid2iso(
              this.props.mymap.center,
              this.props.mymap.pieces[this.props.mymap.choosen_piece_index].pos,
              {x:0, y:0.7}
            )}
            onClick={() => this.props.onClickMoveSouth(this.props.mymap.pieces[this.props.mymap.choosen_piece_index])}
          />
        }

        {this.props.mymap.action_buttons_visible===1 &&
          <Arrow
            key='arrow-n'
            id='arrow-n'
            my_image='./images/iso-arrow-n.png'
            pos={this.grid2iso(
              this.props.mymap.center,
              this.props.mymap.pieces[this.props.mymap.choosen_piece_index].pos,
              {x:0, y:-0.85}
            )}
            onClick={() => this.props.onClickMoveNorth(this.props.mymap.pieces[this.props.mymap.choosen_piece_index])}
          />
      }

      
      {this.props.mymap.action_buttons_visible===1 &&
        this.props.mymap.cards[this.props.mymap.actual_card_index].card_type==='MOVE_PIECE_CARD' &&
        <BurnButton  onClick={this.props.onClickBurnButton} />
      }

      {this.props.mymap.cards.length>0 && this.props.mymap.actual_card_index>=0 &&
        (this.props.mymap.cards[this.props.mymap.actual_card_index].visible===1 ||
        (this.props.mymap.cards[this.props.mymap.actual_card_index].card_type!=='MOVE_PIECE_CARD' &&
        this.props.mymap.cards[this.props.mymap.actual_card_index].visible!==1)) &&
        <NextButton  onClick={this.props.onClickNextButton} />
      }


      </div>
    </div>
  )}
}

export default ActionControls

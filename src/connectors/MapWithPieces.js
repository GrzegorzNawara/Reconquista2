import { connect } from 'react-redux'
import Map from '../components/Map'
import { moveNorth, moveSouth, showNextCard, burnTheCard} from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  //mymap: state.mymap,
  mymap: {
    scenario_choosen: state.mymap.scenario_choosen,
    center: state.mymap.center,
    action_buttons_visible: state.mymap.action_buttons_visible,
    choosen_piece_index: state.mymap.choosen_piece_index,
    pieces: state.mymap.pieces,
    my_piece_id: state.mymap.my_piece_id
  }
})

const mapDispatchToProps = {
  onClickMoveNorth: moveNorth,
  onClickMoveSouth: moveSouth,
  onClickNextButton: showNextCard,
  onClickBurnButton: burnTheCard
}

const MapWithPieces = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapWithPieces

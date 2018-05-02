import { connect } from 'react-redux'
import ActionControls from '../components/ActionControls'
import { moveNorth, moveSouth, showNextCard, burnTheCard} from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  //mymap: state.mymap,
  mymap: {
    visible: (state.mymap.scenario_choosen===1),
    scenario_choosen: state.mymap.scenario_choosen,
    center: state.mymap.center,
    action_buttons_visible: state.mymap.action_buttons_visible,
    choosen_piece_index: state.mymap.choosen_piece_index,
    pieces: state.mymap.pieces,
    my_piece_id: state.mymap.my_piece_id,
    actual_card_index: state.mymap.actual_card_index,
    cards: state.mymap.cards

  }
})

const mapDispatchToProps = {
  onClickMoveNorth: moveNorth,
  onClickMoveSouth: moveSouth,
  onClickNextButton: showNextCard,
  onClickBurnButton: burnTheCard
}

const ActionControlsWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionControls)

export default ActionControlsWithData

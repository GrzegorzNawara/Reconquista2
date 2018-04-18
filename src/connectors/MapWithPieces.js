import { connect } from 'react-redux'
import Map from '../components/Map'
import {activatePiece, moveNorth, moveSouth, showNextCard, burnTheCard} from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  mymap: state.mymap
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

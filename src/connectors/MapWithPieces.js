import { connect } from 'react-redux'
import Map from '../components/Map'
import {activatePiece, moveNorth, moveSouth} from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  mymap: state.mymap
})

const mapDispatchToProps = {
  onClick: activatePiece,
  onClickMoveNorth: moveNorth,
  onClickMoveSouth: moveSouth
}

const MapWithPieces = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapWithPieces

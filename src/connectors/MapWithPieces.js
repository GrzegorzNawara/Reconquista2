import { connect } from 'react-redux'
import Map from '../components/Map'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  pieces: state.rq_pieces
})

const mapDispatchToProps = {
}

const MapWithPieces = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapWithPieces

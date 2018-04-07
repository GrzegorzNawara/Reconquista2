import { connect } from 'react-redux'
import Map from '../components/Map'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  mymap: state.mymap
})

const mapDispatchToProps = {
}

const MapWithPieces = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapWithPieces

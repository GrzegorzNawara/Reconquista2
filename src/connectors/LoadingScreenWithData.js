import { connect } from 'react-redux'
import LoadingScreen from '../components/LoadingScreen'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.show_loading_screen===1),
  logo: './images/logo.png',
  title: 'Loading...'
})

const mapDispatchToProps = {
}

const LoadingScreenWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingScreen)

export default LoadingScreenWithData

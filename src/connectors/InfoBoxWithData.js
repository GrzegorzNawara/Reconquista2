import { connect } from 'react-redux'
import InfoBox from '../components/InfoBox'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.show_game_info===1),
  title: state.mymap.scenario.title,
  content: state.mymap.scenario.subtitle
})

const mapDispatchToProps = {
}

const InfoBoxWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBox)

export default InfoBoxWithData

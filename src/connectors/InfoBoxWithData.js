import { connect } from 'react-redux'
import InfoBox from '../components/InfoBox'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.show_game_info===1),
  title: 'HEADER',
  content: ['CONTENT1','CONTENT1']
})

const mapDispatchToProps = {
}

const InfoBoxWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBox)

export default InfoBoxWithData

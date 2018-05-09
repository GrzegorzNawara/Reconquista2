import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { findHeaderCardById } from '../include/cardsDefinitions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===1),
  war_points: state.mymap.score.war_points*state.mymap.scenario.war_points_weight,
  happy_points: state.mymap.score.happy_points*state.mymap.scenario.happy_points_weight,
  burnt_points: state.mymap.score.burnt_points*state.mymap.scenario.burnt_points_weight,
  my_role: findHeaderCardById(state.mymap.my_piece_id).header
})

const mapDispatchToProps = {
}

const FooterWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterWithData

import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { findCardById } from '../include/cardsDefinitions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  war_points: state.mymap.score.war_points,
  happy_points: state.mymap.score.happy_points,
  burnt_points: state.mymap.score.burnt_points,
  my_role: findCardById(state.mymap.my_piece_id).header
})

const mapDispatchToProps = {
}

const FooterWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterWithData

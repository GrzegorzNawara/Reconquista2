import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { findHeaderCardById } from '../include/cardsDefinitions'
import { showGameInfo } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===1),
  my_role: findHeaderCardById(state.mymap.my_piece_id).header
})

const mapDispatchToProps = {
  onCobClick: showGameInfo
}

const NavBarWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarWithData

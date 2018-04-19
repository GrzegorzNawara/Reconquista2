import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { findCardById } from '../include/cardsDefinitions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  my_role: findCardById(state.mymap.my_piece_id).header
})

const mapDispatchToProps = {
}

const NavBarWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavBarWithData

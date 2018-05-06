import { connect } from 'react-redux'
import Cards from '../components/Cards'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===1),
  cards: state.mymap.hand
})

const mapDispatchToProps = {
}

const CardsWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default CardsWithData

import { connect } from 'react-redux'
import Cards from '../components/Cards'
import { chooseCardFromHand } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===1),
  cards: state.mymap.hand,
  choosen_card: state.mymap.hand_choosen_card
})

const mapDispatchToProps = {
  onClick: chooseCardFromHand
}

const CardsWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default CardsWithData

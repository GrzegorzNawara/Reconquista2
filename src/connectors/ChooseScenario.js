import { connect } from 'react-redux'
import List from '../components/List'
import { chooseScenario } from '../actions'
import { SCENARIO_A1, SCENARIO_A2, SCENARIO_A3, SCENARIO_A4 } from '../include/scenarioDefinitions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===0),
  header: 'Wybierzcie scenariusz',
  items: [
    SCENARIO_A1,
    SCENARIO_A2,
    SCENARIO_A3,
    SCENARIO_A4
  ]
})

const mapDispatchToProps = {
  onClick: chooseScenario
}

const ChooseScenario = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ChooseScenario

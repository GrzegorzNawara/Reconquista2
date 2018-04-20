import { connect } from 'react-redux'
import List from '../components/List'
import { chooseScenario } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===0),
  items: [{
    id: 'scenario1',
    title: 'Scenario 1',
    subtitle:['Łatwy scenariusz']},
    {
    id: 'scenario2',
    title: 'Scenario 2',
    subtitle:['Średni scenariusz']}
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

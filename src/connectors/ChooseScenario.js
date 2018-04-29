import { connect } from 'react-redux'
import List from '../components/List'
import { chooseScenario } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.mymap.scenario_choosen===0),
  header: 'Wybierzcie scenariusz',
  items: [{
    id: 'scenario-a1',
    title: 'A1. Silny król i chłopi',
    subtitle:[
      'Dla 1-8 graczy: Król, 2x Rycerz, 5x Chłop',
      'Scenariusz do poznania gry i integracji grupy.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 5 punktów wojny',
      '- Czas gry jest ograniczony do 15 minut']},
    {
    id: 'scenario-a2',
    title: 'A2. Ciche królestwo',
    subtitle:[
      'Dla 1-5 graczy: Król, Buntownik, Poborca, 2x Rycerz',
      'Scenariusz do symulacji problemów w komunikacji',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 2 punkty szczęścia',
      '- W czasie gry nie wolno mówić']},
    {
    id: 'scenario-a3',
    title: 'A3. Ślepiec',
    subtitle:[
      'Dla 1-4 graczy. W opracowaniu',
      'Scenariusz do niskiej wiedzy lidera i zespołu',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 5 punktów',
      '- Czas gry jest ograniczony do 10 minut']},
    {
    id: 'scenario-a4',
    title: 'A4. Młody król wśród wilków',
    subtitle:[
      'Dla 4-12 graczy. W opracowaniu',
      'Scenariusz do symulacji pracy w warunkach ciężkiego konfliktu i sprzecznych interesów.',
      'Dodatkowe zasady:',
      '- Każdy musi zdobyć minimum 1 punkt',
      '- Czas gry jest ograniczony do 10 minut',
      '- Wolno rozmawiać tylko po angielsku']}
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

import * as actions from './index'


// ADD_ATTENDEE
describe('add attendee action', () => {

  it('addAttendee should create ADD_ATTENDEE action', () => {
    expect(actions.addAttendee({id: 'user12345', name: 'John Doe'})).toEqual({
      type: 'ADD_ATTENDEE',
      id: 'user12345',
      name: 'John Doe'
    })
  })

  it('empty id should not create anything', () => {
    expect(actions.addAttendee({id: '', name: 'John Doe'})).toEqual({
      type: 'ADD_ATTENDEE',
      id: 'user_unknown',
      name: 'John Doe'
    })
  })
})
// ADD_ATTENDEE



// ADD SKILL
describe('add skill item', () => {

  it('addSkill should create ADD_SKILL action', () => {
    expect(actions.addSkill({
      area: 'Współpraca',
      id: 'analiza-sytuacji',
      skill: 'Analiza sytuacji',
      level0: 'Warto rozwinąć ten obszar',
      level1: 'Dobrze rozwinięta umiejętność',
      level2: 'Warto stonować ten obszar'
    })).toEqual({
      type: 'ADD_SKILL',
      area: 'Współpraca',
      id: 'analiza-sytuacji',
      skill: 'Analiza sytuacji',
      level0: 'Warto rozwinąć ten obszar',
      level1: 'Dobrze rozwinięta umiejętność',
      level2: 'Warto stonować ten obszar'
    })
  })
})
// ADD FEEDBACK

import { combineReducers } from 'redux'
import mycards from './mycards'
import mymap from './mymap'
//import debug from '../include/debug'

const myApp = combineReducers({
  mymap: mymap,
  mycards: mycards
})

export default myApp

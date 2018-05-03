import { combineReducers } from 'redux'
import mymap from './mymap'
//import debug from '../include/debug'

const myApp = combineReducers({
  mymap: mymap
})

export default myApp

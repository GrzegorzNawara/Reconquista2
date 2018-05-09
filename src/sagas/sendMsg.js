import { call, select } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* sendMsg(action) {
  const my_hash = yield select((state) => state.mymap.my_hash);
  if(typeof action.my_hash==='undefined' || action.my_hash===my_hash){

    yield call(apiFetchData,
        API_URL+'/api-send-msg.php'
        +"?game_id="+GAME_ID
        +"&user_id="+USER_ID
        +"&action="+JSON.stringify({...action, type: 'UPDATE_'+action.type, my_hash:my_hash, my_user_id:USER_ID})
      )
  }
}

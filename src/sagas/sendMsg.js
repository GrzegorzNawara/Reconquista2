import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* sendMsg(action) {
  if(typeof action.user_id==='undefined' || action.user_id===USER_ID){

    yield put({type: 'REARRANGE_PIECES'});

    const response = yield call(apiFetchData,
        API_URL+'/api-send-msg.php'
        +"?game_id="+GAME_ID
        +"&user_id="+USER_ID
        +"&action="+JSON.stringify({...action, type: 'UPDATE_'+action.type, user_id:USER_ID})
      )
    if (response.error) {
      return yield put({type: 'SEND_MSG_ERROR', response})
    }
    //yield put({type: 'SEND_MSG_SUCCESS'});

    yield delay(500);
    yield put({type: 'SHOW_NEXT_CARD'});
  }
}

import { delay } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* checkForUpdates() {
  const last_msg_id = yield select(state => state.mymap.last_msg_id);
  const last_nonempty_update = yield select(state => state.mymap.last_nonempty_update);

  const response = yield call(apiFetchData,API_URL+'/api-get-msg.php'
    +'?game_id='+GAME_ID
    +'&user_id='+USER_ID
    +'&last_msg_id='+last_msg_id)
  if(response.error){
    return yield put({type:'FETCH_MSG_ERROR',response})
  }

  const msg = response.split("\n").filter((str) => str!=='').map((str) => JSON.parse(str));
  for(let ii=0; ii<msg.length; ii++){
    if(msg[ii].user_id!==USER_ID) {
      yield put(msg[ii]);
    }
    yield put({type:'INCREMENT_MSG_ID'});
  }

  if(msg.length>0){
    yield put({type: 'REARRANGE_PIECES'});
    yield put({type:'CALCULATE_POINTS'});
  }

  if(Date.now()-last_nonempty_update<=30000)
    yield delay(1000);
  else if(Date.now()-last_nonempty_update<=60000)
    yield delay(3000);
  else if(Date.now()-last_nonempty_update<=120000)
    yield delay(10000);
  else
    yield delay(30000);
}
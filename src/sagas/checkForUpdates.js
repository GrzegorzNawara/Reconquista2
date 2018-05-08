import { delay } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* checkForUpdates() {
  const my_hash = yield select((state) => state.mymap.my_hash);
  const last_msg_id = yield select(state => state.mymap.last_msg_id);
  const last_nonempty_update = yield select(state => state.mymap.last_nonempty_update);

  const response = yield call(apiFetchData,API_URL+'/api-get-msg.php'
    +'?game_id='+GAME_ID
    +'&user_id='+USER_ID
    +'&last_msg_id='+last_msg_id)

  const msg = response.split("\n").filter((str) => str!=='').map((str) => JSON.parse(str));
  for(let ii=0; ii<msg.length; ii++){

    if(msg[ii].my_hash!==my_hash){
      if(msg[ii].type==='UPDATE_PLAY_CARD_FROM_HAND' && msg[ii].my_user_id===USER_ID)
        yield put(msg[ii]);
      else if(msg[ii].type==='UPDATE_BURN_THE_MOVE' && msg[ii].my_user_id===USER_ID)
        yield put(msg[ii]);
      else if(msg[ii].type==='UPDATE_MOVE_NORTH' || msg[ii].type==='UPDATE_MOVE_SOUTH') {
        yield put(msg[ii]);
        yield put({type:'REARRANGE_PIECES'});
        yield put({type:'CALCULATE_POINTS'});
        yield put({type: 'RECENTER'});
      }
    }
    yield put({type:'INCREMENT_MSG_ID'});
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

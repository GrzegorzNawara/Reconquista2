import { delay } from 'redux-saga'
import { put, fork, call, select } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { setMyPieceId } from '../actions'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
import addMyCards from './addMyCards'
//import debug from '../include/debug'

export default function* initLoad() {
  const my_index = yield select((state) => state.mymap.my_index);

  while(true){

    let last_msg_id = yield select(state => state.mymap.last_msg_id);
    let scenario=[];
    let my_piece_id='';

    const response = yield call(apiFetchData,API_URL+'/api-get-msg.php'
      +'?game_id='+GAME_ID
      +'&user_id='+USER_ID
      +'&last_msg_id='+last_msg_id)

    const msg = response.split("\n").filter((str) => str!=='').map((str) => JSON.parse(str));

    if(msg.length===0)
      yield put({type:'HIDE_LOADING_SCREEN'});

    for(let ii=0; ii<msg.length; ii++){

      if(msg[ii].type==='SET_SCENARIO'){
        scenario=msg[ii].scenario;
        my_piece_id=scenario.usr_pieces[my_index%msg[ii].scenario.usr_pieces.length];
        yield put(setMyPieceId({my_piece_id:my_piece_id}));
        yield fork(addMyCards,{scenario, my_piece_id});
      }

      yield put(msg[ii]);
      yield put({type:'INCREMENT_MSG_ID'});

      if(msg[ii].type==='GAME_SETUP_READY') {
        yield put({type:'HIDE_LOADING_SCREEN'});
        return false;
      }
    }

    yield delay(3000);
  }
}

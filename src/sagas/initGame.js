import { put, call } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* initGame() {

  const response = yield call(apiFetchData,API_URL+'/api-init-game.php'
    +'?game_id='+GAME_ID
    +'&user_id='+USER_ID);
  if(response.error){
    return yield put({type:'FETCH_MSG_ERROR',response});
  }
}
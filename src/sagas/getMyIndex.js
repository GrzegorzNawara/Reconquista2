import { put, call } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* getMyIndex() {
    const response = yield call(apiFetchData,API_URL+'/api-get-my-index.php'
      +'?game_id='+GAME_ID
      +'&user_id='+USER_ID);
    return yield put({type:'SET_MY_INDEX', my_index:response});
}

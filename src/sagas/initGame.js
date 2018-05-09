import { call, select } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { API_URL, USER_ID, GAME_ID } from '../include/apiConfig'
//import debug from '../include/debug'

export default function* initGame() {
  const scenario_id = yield select((state) => state.mymap.scenario_id);
  yield call(apiFetchData,API_URL+'/api-init-game.php'
    +'?game_id='+GAME_ID
    +'&user_id='+USER_ID
    +'&scenario_id='+scenario_id);
}

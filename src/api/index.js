import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'
//import debug from '../include/debug'

if (!window.fetch) { require('whatwg-fetch') }

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const apiFetch = (api_call) => {
    return fetch(api_call)
    .then(statusHelper)
    .then(response => response.text())
    .catch(error => 'FETCH_ERROR')
    .then(data => data);
}

export const apiFetchData = function* (api_call) {
  let delay_time=1000;
  while(true){
    const response = yield call(apiFetch,api_call);
    if(response==='FETCH_ERROR')
      yield delay(delay_time);
    else
      return response;
    delay_time*=1.2;
}}

if (!window.fetch) { require('whatwg-fetch') }

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const apiFetchData = function (api_call) {
  return fetch(api_call)
  .then(statusHelper)
  .then(response => response.text())
  .catch(error => error)
  .then(data => data)
}

import App from '../App';

const config = require('../config.json')
import { debugLog, errorLog } from '../lib/logs'
import { Intent } from '@blueprintjs/core'

/**
 * API call
 * @param {String} route Route
 * @param {Function} callback Callback
 */
const apiCall = (route, callback) => {
  debugLog('apiCall');

  fetch(config.api + route)
    .then((response) => response.json())
    .then((data) =>
    {
      debugLog('Data received !');
      callback(data);
    })
    .catch(function(error) {
      errorLog(error)
      App.showToast(Intent.DANGER, error.message, 5000);
    });
}

export default apiCall

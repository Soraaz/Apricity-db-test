import { debugLog } from '../lib/logs'
import apiCall from './apiCall'

/**
 * Get Variables
 * @param {String} column Column value
 * @param {Function} callback Callback
 */
const getVariables = (callback) => {
  debugLog('lib::api::getVariables')
  apiCall('/getVariables', callback);
}

export default getVariables

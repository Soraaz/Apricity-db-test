import { debugLog } from '../lib/logs'
import apiCall from './apiCall'

/**
 * Get Column values
 * @param {String} column Column value
 * @param {Function} callback Callback
 */
const getColumnValues = (column, callback) => {
  debugLog('lib::api::getColumnValues ')
  apiCall('/getColumnValues?variable="' + column + '"', callback);
}

export default getColumnValues

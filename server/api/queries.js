const { Pool } = require('pg')
const { infoLog, debugLog, errorLog } = require('../lib/logs')
const config = require('../config.json')

/**
 * Start postgreSQL database
 */
const startDB = () => {
  debugLog('startDB')
  const pool = new Pool(config)

  pool.connect()
    .then(() => infoLog('postgreSQL connected'))
    .catch(err => {
      errorLog('postgreSQL connection error')
      errorLog(err.stack)
      pool.end()
    })

  return pool
}

// Start DB and print version
const pool = startDB()

const DBgetColumnValues = require('./routes/getColumnValues')
const DBgetVariables = require('./routes/getVariables')

const getColumnValues = (request, response) => {
  DBgetColumnValues(pool, request, response)
}

const getVariables = (request, response) => {
  DBgetVariables(pool, request, response)
}

module.exports = {
  pool,
  getColumnValues,
  getVariables
}

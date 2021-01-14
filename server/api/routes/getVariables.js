const { errorLog } = require('../../lib/logs')

const getVariables = (pool, request, response) => {
    pool.query('SELECT COLUMN_NAME\n' +
      'FROM INFORMATION_SCHEMA.COLUMNS\n' +
      'WHERE TABLE_NAME = N\'census_learn_sql\' AND NOT COLUMN_NAME=\'age\'', (error, results) => {
      if (error) {
        response.status(500).json("Error with server.")
        errorLog(error);
      } else
        response.status(200).json(results.rows)
    })
}

module.exports = getVariables;
const { errorLog } = require('../../lib/logs')

const getColumnValues = (pool, request, response) => {
  if (!request.query || !request.query.variable) {
    response.status(500).json("Not variable given.")
  }
  else {
    pool.query('SELECT ' + request.query.variable + ', COUNT(' + request.query.variable + '), CAST(AVG(age) AS DECIMAL(10,1))\n' +
      'FROM census_learn_sql\n' +
      'GROUP BY ' + request.query.variable + '\n' +
      'ORDER BY COUNT(' + request.query.variable + ') DESC\n' +
      'LIMIT 100\n', (error, results) => {
      if (error) {
        response.status(500).json("Error with server.")
        errorLog(error);
      } else
        response.status(200).json(results.rows)
    })
  }
}

module.exports = getColumnValues;
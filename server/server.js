const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const cors = require('cors')

const db = require('./api/queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

app.get('/', (request, response) => {
  response.json({ info: 'Apricity-db api' })
})

app.get('/getColumnValues', db.getColumnValues)
app.get('/getVariables', db.getVariables)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
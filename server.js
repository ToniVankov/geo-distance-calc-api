const express = require('express')
const app = express()
const haversine = require('haversine')
const cors = require('cors')

app.use(cors({
  origin: '*'
}))

app.get('/distance', (req, res) => {
  const lat1 = req.query.lat1
  const lon1 = req.query.lon1
  const lat2 = req.query.lat2
  const lon2 = req.query.lon2

  const start = {
    latitude: lat1,
    longitude: lon1
  }
  const end = {
    latitude: lat2,
    longitude: lon2
  }
  
  const distance = haversine(start, end)

  res.setHeader('Content-Type', 'application/json')
  res.send({ distance: distance })
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on port' + process.env.POR);
})

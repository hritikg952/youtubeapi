import express from 'express'


const app = express()
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('/api/data', (req, res) => {
  res.send('data')
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
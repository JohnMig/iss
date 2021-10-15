import express from 'express'

const app = express()

app.disable('server')
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.removeHeader('server')
  res.send('Node.js Application')
})

app.listen(process.env.PORT || 5000)
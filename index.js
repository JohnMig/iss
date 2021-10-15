import express from 'express'

const app = express()

app.disable('server')

app.get('/', (req, res) => res.send('Node.js Application'))

app.listen(process.env.PORT || 5000)
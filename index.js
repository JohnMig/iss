import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Node.js Application'))

app.listen(process.env.PORT || 5000)
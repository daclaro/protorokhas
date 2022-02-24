const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const path = require('path')
const pool = require('./db')
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.

app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === 'production') {
  //npm run build static port 5000 react
  app.use(express.static(path.join(__dirname, 'client/build')))
}

const notesRouter = require('./routes/api/notes.js')
const usersRouter = require('./routes/api/users.js')
const authRouter = require('./routes/api/auth.js')

app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}`))
app.get('*', (req, res) => {
  res.sendFilepath.join(__dirname, 'client/build/index.html')
})

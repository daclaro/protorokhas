require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
const usersRouter = express.Router()
const pool = require('../../db.js')
const auth = require('../../middleware/auth.js')

usersRouter.get('/', async (req, res) => {
  try {
    console.log('hi')
    const users = await pool.query('SELECT * FROM USERS')
    res.json(users.rows)
  } catch (error) {
    console.error(error.message)
  }
})

usersRouter.get('/me', auth, async (req, res) => {
  try {
    console.log('hjhj')
    const user_id = req.user.id
    console.log(user_id)
    const users = await pool.query('SELECT * FROM USERS WHERE user_id=$1', [user_id])
    console.log('RUSSIAAAAAAAAAARUSSIAAAAAAAAAARUSSIAAAAAAAAAA')
    console.log('RUSSIAAAAAAAAAARUSSIAAAAAAAAAARUSSIAAAAAAAAAA', users)
    ///  res.json({ user: users.rows, token: req.get('authorization').substring(7) })
    res.json({ user: users.rows, token: req.extractedToken })
  } catch (error) {
    console.error(error.message)
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_country, user_address, user_city, user_state, user_zip } = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(user_password, saltRounds)
    const newUsers = await pool.query('INSERT INTO users(user_name, user_email, user_password, user_country, user_address, user_city, user_state, user_zip) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [
      user_name,
      user_email,
      passwordHash,
      user_country,
      user_address,
      user_city,
      user_state,
      user_zip,
    ])
    const payload = { user: { id: newUsers.rows[0].user_id } }
    jwt.sign(
      payload,
      //dunno about this bug
      '' + process.env.Sekret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          throw err
        }
        res.json({ token })
      }
    )
    console.log(newUsers.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = usersRouter

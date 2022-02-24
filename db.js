const Pool = require('pg').Pool
require('dotenv')

const devConfig = {
  user: process.env.PGuser,
  password: process.env.PGpassword,
  host: process.env.PGhost,
  port: process.env.PGport,
  database: process.env.PGdatabase,
}

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addon
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? proConfig : devConfig)
module.exports = pool

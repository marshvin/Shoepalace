const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Shoepalace',
  password: '1234',
});

module.exports = pool;
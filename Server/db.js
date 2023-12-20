const { Client } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'Products',
  password: '',
};

const client = new Client(dbConfig);
client.connect();

module.exports = client;

const { Client } = require('pg');

const dbConfig = {
  user: '',
  host: '',
  database: '',
  password: '',
};

const client = new Client(dbConfig);
client.connect();

module.exports = client;

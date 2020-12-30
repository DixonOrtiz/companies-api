const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = require('../config/env');

const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connect = async () => {
  try {
    await mongoose.connect(dbUrl, connectionParams);
    return 'Successful connection to the database';
  } catch (error) {
    throw new Error(`Could not connect to the database \n${error}`);
  }
};

module.exports = {
  connect,
};

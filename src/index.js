const express = require('express');
const expressConfig = require('./config/express');
const { PORT } = require('./config/env');
const { connect } = require('./helpers/mongo-connection');
const { companySeeder } = require('./seed/company-seeder');

const app = express();
expressConfig(app);

// Function that checks to connect to the db before the server starts listening
const runServer = async () => {
  await connect()
    .then(async (connectionMessage) => {
      // Succesful connection to database
      console.log(connectionMessage);
      await companySeeder();

      app.listen(PORT, () => {
        console.log(`[server] Running at port ${PORT}`);
      });
    }) // Error connecting to database
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

runServer();

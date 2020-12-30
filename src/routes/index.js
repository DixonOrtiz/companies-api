const express = require('express');
const app = express();

// Import routers
const authRouter = require('./auth.js');
const companyRouter = require('./company.js');

app.use(authRouter, companyRouter);

module.exports = app;

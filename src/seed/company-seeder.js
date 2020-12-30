const mongoose = require('mongoose');
const { connect } = require('../helpers/mongo-connection');
const { companies } = require('./company-data.js');
const Company = require('../model/company');
const companyName = 'company1';

const companySeeder = async () => {
  // Check if database is already sedded
  const isSeeded = await Company.exists({ name: companyName });
  if (!isSeeded) {
    try {
      await Company.insertMany(companies).then(() =>
        console.log('Data inserted!')
      );
    } catch (error) {
      console.error('Error while seeding data');
    }
  }
};

module.exports = { companySeeder };

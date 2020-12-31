const Company = require('../model/company');
const faker = require('faker');

const generateArray = (recordsNumber) => {
  const array = [];
  for (let i = 0; i < recordsNumber; i++) {
    array.push(
      new Company({
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      })
    );
  }

  return array;
};

const companySeeder = async (recordsNumber) => {
  try {
    await Company.deleteMany({});

    const companies = generateArray(recordsNumber);
    await Company.insertMany(companies).then(() =>
      console.log(`Data inserted, ${recordsNumber} registers has been created!`)
    );
  } catch (error) {
    console.error('Error while seeding data', error);
  }
};

module.exports = { companySeeder };

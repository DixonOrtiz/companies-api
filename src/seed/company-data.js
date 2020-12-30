const Company = require('../model/company');

const companies = [
  new Company({
    name: 'company1',
    address: 'address1',
    email: 'email1@gmail.com',
    phone: '11111111',
  }),
  new Company({
    name: 'company2',
    address: 'address2',
    email: 'email2@gmail.com',
    phone: '22222222',
  }),
  new Company({
    name: 'company3',
    address: 'address 3',
    email: 'email3@gmail.com',
    phone: '33333333',
  }),
  new Company({
    name: 'company4',
    address: 'address4',
    email: 'email4@gmail.com',
    phone: '44444444',
  }),
  new Company({
    name: 'company5',
    address: 'address5',
    email: 'email5@gmail.com',
    phone: '55555555',
  }),
  new Company({
    name: 'company6',
    address: 'address6',
    email: 'email6@gmail.com',
    phone: '66666666',
  }),
  new Company({
    name: 'company7',
    address: 'address7',
    email: 'email7@gmail.com',
    phone: '77777777',
  }),
  new Company({
    name: 'company8',
    address: 'address8',
    email: 'email8@gmail.com',
    phone: '88888888',
  }),
  new Company({
    name: 'company9',
    address: 'address9',
    email: 'email9@gmail.com',
    phone: '99999999',
  }),
];

module.exports = {
  companies,
};

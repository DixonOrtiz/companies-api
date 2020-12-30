const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const registerValidation = (requestBody) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

const loginValidation = (requestBody) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

const companyByIdValidation = (requestBody) => {
  const schema = Joi.object({
    _id: Joi.objectId().required(),
  });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  return error.details[0].message;
};

const createCompanyValidation = (requestBody) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    address: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    phone: Joi.string().min(8).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

const updateCompanyValidation = (requestBody) => {
  const schema = Joi.object({
    _id: Joi.objectId().required(),
    name: Joi.string().min(6),
    address: Joi.string().min(6),
    email: Joi.string().min(6).email(),
    phone: Joi.string().min(8),
  }).options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

module.exports = {
  registerValidation,
  loginValidation,
  companyByIdValidation,
  createCompanyValidation,
  updateCompanyValidation,
};

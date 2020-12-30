const Company = require('../model/company');
const {
  companyByIdValidation,
  createCompanyValidation,
  updateCompanyValidation,
} = require('../helpers/joi-validations');

const getCompanyById = async (request, response) => {
  // Request body validation
  const validationErrors = companyByIdValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // Company existence validation
  const doesCompanyExists = await Company.exists({
    _id: request.body._id,
  });
  if (!doesCompanyExists)
    return response
      .status(409)
      .send(`The company with id '${request.body._id}' does not exist`);

  try {
    const { _id } = request.body;

    await Company.findById(_id).then((company) => {
      response.status(200).json(company);
    });
  } catch (error) {
    response.status(500).json({
      error,
    });
  }
};

const getAllCompanies = async (request, response) => {
  try {
    await Company.find({}).then((companies) => {
      response.status(200).json(companies);
    });
  } catch (error) {
    response.status(500).json({
      error,
    });
  }
};

const createCompany = async (request, response) => {
  // Request body validation
  const validationErrors = createCompanyValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // Company existence validation
  const doesCompanyExists = await Company.exists({
    name: request.body.name,
  });
  if (doesCompanyExists)
    return response
      .status(409)
      .send(`The company with name '${request.body.name}' already exists`);

  try {
    const company = new Company({
      name: request.body.name,
      address: request.body.address,
      email: request.body.email,
      phone: request.body.phone,
    });
    await company.save();

    response.status(200).json({ company });
  } catch (error) {
    response.status(500).json({
      error,
    });
  }
};

const updateCompany = async (request, response) => {
  // Request body validation
  const validationErrors = updateCompanyValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // Company existence validation
  const doesCompanyExists = await Company.exists({
    _id: request.body._id,
  });
  if (!doesCompanyExists)
    return response
      .status(409)
      .send(`The company with id '${request.body._id}' does not exist`);

  try {
    const { _id } = request.body;

    await Company.findByIdAndUpdate(
      _id,
      { $set: request.body },
      { new: true },
      (error, company) => {
        if (error) {
          response.status(500).json({
            error,
          });
        } else {
          response.status(200).json({ company });
        }
      }
    );
  } catch (error) {
    response.status(500).json({
      error,
    });
  }
};

const deleteCompany = async (request, response) => {
  // Request body validation
  const validationErrors = companyByIdValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // Company existence validation
  const doesCompanyExists = await Company.exists({
    _id: request.body._id,
  });
  if (!doesCompanyExists)
    return response
      .status(409)
      .send(`The company with id '${request.body._id}' does not exist`);

  try {
    const { _id } = request.body;
    await Company.findByIdAndDelete(_id, (error) => {
      if (error) {
        response.status(400).json({
          error: 'Bad request',
        });
      } else {
        response.status(200).json({ response: 'Successful deletion' });
      }
    });
  } catch (error) {
    response.status(500).json({
      error,
    });
  }
};

module.exports = {
  getCompanyById,
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
};

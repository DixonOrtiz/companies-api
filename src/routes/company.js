const router = require('express').Router();
const { verifyToken } = require('../middlewares/verify-token');

const {
  getCompanyById,
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company');

router.route('/company/getCompanyById').get(verifyToken, getCompanyById);
router.route('/company/getAllCompanies').get(verifyToken, getAllCompanies);
router.route('/company/createCompany').post(verifyToken, createCompany);
router.route('/company/updateCompany').put(verifyToken, updateCompany);
router.route('/company/deleteCompany').delete(verifyToken, deleteCompany);

module.exports = router;

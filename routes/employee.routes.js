const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/employee.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', employee_controller.test);
module.exports = router;

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// POST route for adding an employee
router.post('/add-emp', employeeController.createEmployee);

module.exports = router;

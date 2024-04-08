const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// POST , GET , PUT , DELETE route for employeeS
router.post("/add-emp", employeeController.createEmployee);
router.get("/get-emp", employeeController.getEmployees);

module.exports = router;

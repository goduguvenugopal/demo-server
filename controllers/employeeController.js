const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    const { name, phone, address } = req.body;

    // Input validation
    if (!name || !phone || !address) {
      return res
        .status(400)
        .json({ message: "Name, phone, and address are required fields." });
    }

    const employee = new Employee({
      name,
      phone,
      address,
    });

    await employee.save();
    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getEmployess = async (res , req) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch(error) {
    console.error("there is an error :", error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { createEmployee, getEmployess };

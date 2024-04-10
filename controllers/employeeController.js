const { Employee, User } = require("../models/Employee");

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

const createUser = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "Text is a required field." });
    }
    const user = new User({
      text,
    });

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const deleteUser = async (req, res) => {
  try {
    // Extracting the 'text' field from the request body
    const { text } = req.body;
    
    // Checking if the 'text' field is provided
    if (!text) {
      return res.status(400).json({ message: "text unable to delete." });
    }
    
    // Deleting all existing users in the database
    await User.deleteMany({});
    
    // Creating a new user object with the provided text
    const user = new User({
      text,
    });

    // Saving the user object to the database
    await user.save();
    
    // Sending a response with the created user object
    res.status(200).json(user);
  } catch (error) {
    // Handling errors
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports = { createEmployee, getEmployees, createUser, getUser };

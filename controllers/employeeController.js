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
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const userById = await User.findById(req.params.id);
    res.status(200).json(userById);
  } catch (error) {
    console.error("there is error :", error);
    res.status(500).json({ message: "server error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const delUsers = await User.deleteMany();
    res.status(200).json(delUsers);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const delUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { text } = req.body;

    const updateById = await User.findByIdAndUpdate(req.params.id, { text });
    if (!updateById) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(200).json(updateById);
  } catch (error) {
    console.error("error updating user :", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  createUser,
  getUser,
  deleteUsers,
  delUserById,
  getUserById,
  updateUserById
};

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  _id: {
    type: Number, // or whichever type you want for your custom ID
    required: true, // or false depending on whether you want the ID to be required
    unique: true // if you want the custom ID to be unique
  },
  text: {
    type: String,
    required: true,
  }
},{
  timestamps : true,
  
});

const Employee = mongoose.model("Employee", employeeSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Employee,
  User
};

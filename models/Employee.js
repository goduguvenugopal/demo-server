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

const userSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

 
// image schema 

const imageSchema = new mongoose.Schema({
  data: req.file.buffer,
  contentType: req.file.mimetype,
})




const Employee = mongoose.model("Employee", employeeSchema);
const User = mongoose.model("User", userSchema);
const Image = mongoose.model("Image", imageSchema)


module.exports = {
  Employee,
  User,
  Image
};

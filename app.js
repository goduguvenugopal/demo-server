const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");
const cors = require('cors')

 

const port = process.env.PORT || 7000;

app.use(bodyParser.json());

dotEnv.config();

const corsOptions = {
  origin: 'https://vkzomato.netlify.app/', // Replace with your frontend domain
  methods: ['GET', 'POST'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
  credentials: true, // Allow credentials (cookies)
};

// app.post('/employees/add-emp', (req, res) => {
//   // Handle the POST request to add an employee
// });

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

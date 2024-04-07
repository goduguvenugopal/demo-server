const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");

const port = process.env.PORT || 7000;

app.use(bodyParser.json());

dotEnv.config();

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

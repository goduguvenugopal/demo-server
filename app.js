const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");
const cors = require("cors");
const { User } = require("./models/Employee");

const port = process.env.PORT || 7000;
app.use(express.static('public'));
app.use(bodyParser.json());

dotEnv.config();

const corsOptions = {
  origin: "*",
  methods:"*",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.delete('/delete-all', async (req, res) => {
  try {
    await User.deleteMany({}); // Delete all documents in the 'User' collection
    res.status(200).json({ message: 'All data deleted successfully.' });
  } catch (error) {
    console.error('Error deleting all data:', error);
    res.status(500).json({ error: 'Failed to delete all data.' });
  }
});


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

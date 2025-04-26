require("dotenv").config();
const mongoose = require("mongoose");

const MongoConnect = () => {
  mongoose.connect("mongodb+srv://mehul002:mehulgarg@cluster0.36yxym9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log("Database Connection Error: " + err.message);
  });
  db.once("connected", () => {
    console.log("Database Connected");
  });
};

module.exports = MongoConnect;

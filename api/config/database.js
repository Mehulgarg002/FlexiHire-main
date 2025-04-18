require("dotenv").config();
const mongoose = require("mongoose");

const MongoConnect = () => {
  mongoose.connect("mongodb+srv://ashutoshs97:ashutoshs97@flexihire.de9icog.mongodb.net/FlexDB?retryWrites=true&w=majority");
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log("Database Connection Error: " + err.message);
  });
  db.once("connected", () => {
    console.log("Database Connected");
  });
};

module.exports = MongoConnect;

const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/exptracker")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Not connected");
  });

const transactions = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transactions = new mongoose.model("transactions", transactions);

module.exports = {
  Transactions,
};

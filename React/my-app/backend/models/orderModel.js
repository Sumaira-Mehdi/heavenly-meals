import mongoose from "mongoose";

const Schema = mongoose.Schema
const  orderSchema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  date: {
    type: Date,
    // default: (new Date()).getTime()
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
});

// The alternative to the export model pattern is the export schema pattern.
const OrdersDB = mongoose.model("Order", orderSchema);

export { OrdersDB };

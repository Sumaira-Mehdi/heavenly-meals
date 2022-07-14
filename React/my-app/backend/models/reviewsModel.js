import mongoose from "mongoose";

const Schema = mongoose.Schema
const reviewsSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
  },
});

const reviewsDB = mongoose.model("Reviews", reviewsSchema);

export { reviewsDB };


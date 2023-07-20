import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Number,
  },
  link: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  context: {
    required: true,
    type: Array,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
});

export default mongoose.models.Data || mongoose.model("Data", dataSchema);

import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Conncted");
});
export default connectMongo;

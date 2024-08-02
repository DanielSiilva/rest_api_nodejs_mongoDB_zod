import mongoose from "mongoose";
import config from "config";

async function connect() {
  const mongoUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(mongoUri);
    console.log("DB connected");
  } catch (error) {
    console.error("Could not connect to db", error);
  }
}

export default connect;

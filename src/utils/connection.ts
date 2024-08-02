import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connect() {
  const mongoUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(mongoUri);
    log.info("DB connected");
  } catch (error) {
    log.error("Could not connect to db", error);
  }
}

export default connect;

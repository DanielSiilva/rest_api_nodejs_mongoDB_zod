import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const mongoUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(mongoUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db", error);
  }
}

export default connect;

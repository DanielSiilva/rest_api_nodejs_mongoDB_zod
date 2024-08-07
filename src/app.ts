import express from "express";
import config from "config";
import connect from "./utils/connection";
import logger from "./utils/logger";
import routes from "./routes/routes";

const PORT = config.get<number>("port");
const app = express();

app.use(express.json());

app.listen(PORT, async () => {
  logger.info(`Server running at http://localhost:${PORT}`);
  await connect();
  routes(app);
});

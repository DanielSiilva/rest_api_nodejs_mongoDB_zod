import express from "express";
import config from "config";
import connect from "./utils/connection";

const PORT = config.get<number>("port");
const app = express();

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  await connect();
});

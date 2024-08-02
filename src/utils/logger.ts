import logger from "pino";
import dayjs from "dayjs";
import pinoPretty from "pino-pretty";

const stream = pinoPretty({
  colorize: true,
  translateTime: true,
  ignore: "pid,hostname",
});

const log = logger(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  stream
);

export default log;

import { PORT, HOST } from "../config.js";

export const receiveVariables = async (req, res) => {
  res.json({
    port: PORT,
    host: HOST,
  });
};

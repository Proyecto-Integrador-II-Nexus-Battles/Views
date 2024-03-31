import { PORT, HOST, PORT_BACK } from "../config.js";

export const receiveVariables = async (req, res) => {
  res.json({
    port: PORT,
    host: HOST,
    port_back: PORT_BACK,
  });
};

//Hey

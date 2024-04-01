import express from "express";
import usuarioRoutes from "./routes/manejo_usuarios/routes.js";
import configRoutes from "./routes/config.routes.js";
import testing2Routes from "./routes/vitrina_productos/testing.routes.js";
import { APP_PORT } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import http from "http";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.use(function (req, res, next) {

//   res.append('Access-Control-Allow-Origin', ['http://localhost:5000/register']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next()
// });

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(usuarioRoutes);
app.use(configRoutes);
app.use(testing2Routes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found!!!!",
  });
});

const options = {
  key: fs.readFileSync("certs/privkey.pem"),
  cert: fs.readFileSync("certs/cert.pem"),
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

http.createServer(app).listen(82);
https.createServer(options, app).listen(APP_PORT);
console.log(`Server is runing on ${APP_PORT}`);

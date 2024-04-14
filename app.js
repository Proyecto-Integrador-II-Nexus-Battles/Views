import express from "express";
import carroComprasRoutes from "./routes/carro_compras/testing.routes.js";
import inventarioRoutes from "./routes/inventario/testing.routes.js";
import usuarioRoutes from "./routes/manejo_usuarios/routes.js";
import vitrinaProductosRoutes from "./routes/vitrina_productos/testing.routes.js";
import miBancoRoutes from "./routes/mi_banco/testing.routes.js";
import listaDeseosRoutes from "./routes/lista_deseos/routes.js";
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

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(carroComprasRoutes);
app.use(inventarioRoutes);
app.use(miBancoRoutes);
app.use(usuarioRoutes);
app.use(vitrinaProductosRoutes);
app.use(listaDeseosRoutes);

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

// http.createServer(app).listen(80);
https.createServer(options, app).listen(APP_PORT);
console.log(`Server is runing on ${APP_PORT}`);

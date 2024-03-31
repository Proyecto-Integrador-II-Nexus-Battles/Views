import express, { json } from "express";
import listaDeseosRouter from "./routes/lista_deseos/routes.js"; //--> !!!IMPORTANT!!! Siempre que importen un archivo extensión .js .Loquesea, siempre ponerlo en el path, ej -> './routes/template.js' --> el .js es la extensión
import testing2Routes from "./routes/vitrina_productos/testing.routes.js";
import testingRoutes from "./routes/manejo_usuarios/routes.js";
import { PORT_BACK } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";
import fs from "fs";
import http from "http";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configuracion del view engine
app.set("view engine", "ejs"); //EJS como motor de vista
app.set("views", path.join(__dirname, "views")); // direcotorio de vistas
app.use(express.static(path.join(__dirname, "public"))); // directorio de archivos estaticos

app.use(listaDeseosRouter);
app.use(testingRoutes);
app.use(testing2Routes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

const options = {
  key: fs.readFileSync("certs/privkey.pem"),
  cert: fs.readFileSync("certs/cert.pem"),
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(PORT_BACK);
console.log("Server on port", PORT_BACK);

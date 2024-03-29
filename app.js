
import express, { json } from 'express'
import dotenv from 'dotenv';
dotenv.config({ path: './local/.env' });
import  listaDeseosRouter  from './routes/lista_deseos/routes.js' //--> !!!IMPORTANT!!! Siempre que importen un archivo extensión .js .Loquesea, siempre ponerlo en el path, ej -> './routes/template.js' --> el .js es la extensión 
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import express from "express";
import testing2Routes from "./routes/vitrina_productos/testing.routes.js";
import testingRoutes from "./routes/manejo_usuarios/routes.js";
import { APP_PORT } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// configuracion del view engine
app.set('view engine', 'ejs'); //EJS como motor de vista 
app.set('views', path.join(__dirname, 'views')); // direcotorio de vistas

app.use(express.static(path.join(__dirname, 'public')));


app.use(listaDeseosRouter)

const PORT = process.env.PORT || 8000 // --> Usar la variable de entorno PORT, si no usar el port 3000

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(testingRoutes);
app.use(testing2Routes);

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint not found",
    });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(APP_PORT, () => {
    console.log(`Server listen on port ${APP_PORT}`)
})


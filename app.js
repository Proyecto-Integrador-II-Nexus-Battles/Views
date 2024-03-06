import express from "express";
import usuarioRoutes from "./routes/manejo_usuarios/routes.js";
import { PORT } from "./config.js";
import { fileURLToPath } from "url";
import * as path from "path";
import bodyParser from "body-parser";
import cors from "cors";


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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(usuarioRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found!!!!",
  });
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);

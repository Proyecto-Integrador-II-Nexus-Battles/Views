import express, { json } from 'express'
import dotenv from 'dotenv';
dotenv.config({ path: './local/.env' });
import  listaDeseosRouter  from './routes/lista_deseos/routes.js' //--> !!!IMPORTANT!!! Siempre que importen un archivo extensión .js .Loquesea, siempre ponerlo en el path, ej -> './routes/template.js' --> el .js es la extensión 
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express() // --> Iniciamos express
app.use(json()) 
app.disable('x-powered-by') // --> Deshabilitar el header x-powered-by


// configuracion del view engine
app.set('view engine', 'ejs'); //EJS como motor de vista 
app.set('views', path.join(__dirname, 'views')); // direcotorio de vistas

app.use(express.static(path.join(__dirname, 'public')));


app.use(listaDeseosRouter)

const PORT = process.env.PORT || 8000 // --> Usar la variable de entorno PORT, si no usar el port 3000

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`)
})


import path from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export const PORT = 5000;
export const APP_PORT = process.env.APP_PORT;
export const HOST = process.env.HOST;
export const HOST_PORT = process.env.HOST_PORT;
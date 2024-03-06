export const PORT = 5000;
export const HOST = 'http://localhost:' + PORT;

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
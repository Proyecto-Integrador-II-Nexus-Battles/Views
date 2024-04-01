import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.resolve(__dirname, ".env") });

export const PORT = process.env.PORT || 5000;
export const HOST = process.env.HOST || "localhost";
export const APP_PORT = process.env.APP_PORT || 3000;

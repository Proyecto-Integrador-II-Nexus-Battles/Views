import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.resolve(__dirname, ".env") });

export const HOST = process.env.HOST || "http://gateway.thenexusbattlesii.online";
export const PORT = process.env.PORT || 5000;
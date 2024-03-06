import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  s
export const HOST = process.env.HOST || "http://gateway.thenexusbattlesii.online";
export const PORT = process.env.PORT || 5000;

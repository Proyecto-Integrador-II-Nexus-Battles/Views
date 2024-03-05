import axios from "axios";
import { PORT, HOST } from "../../config.js";

export const renderLogin = (req, res) => {
    res.render("manejo_usuarios/login.ejs");
}

export const userLogging = async (req, res) => {
    const endpoint = "/logIn"
    axios.post(`${HOST}:${PORT}${endpoint}`, { email: req.body.email, password: req.body.password });
}
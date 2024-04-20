import { HOST, PORT } from "../../config.js";



export const cartasSubasta = async (_req, res) => {
    try {

        const options = {
            headers: {
                'Authorization': `${_req.query.token}`,
            },
        };

        const response = await fetch(`https://localhost:${PORT}/subasta/get-cartas-subasta`, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        console.log(idCartas);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${_req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

        const datos = await conexionInventario.json();
        console.log(datos);
        datos.forEach((carta, index) => {
            carta.ID_SUBASTA = datos[index].ID;
        });

        res.render("subasta/subasta_vitrina", { datos });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");

    }
}

export const filtrarCartasSubasta = async (req, res) => {
    try {

        const options = {
            headers: {
                'Authorization': `${req.query.token}`,
            },
        };

        const query = req.query;
        const params = new URLSearchParams(query).toString();
        const response = await fetch(`https://localhost:${PORT}/subasta/get-cartas-subasta?${params}`, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

        const datos = await conexionInventario.json();
        console.log(datos);
        datos.forEach((carta, index) => {
            carta.ID_SUBASTA = datos[index].ID;
        });

        res.render("subasta/subasta_vitrina", { datos });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


export const subastaDetallada = async (_req, res) => {
    try {

        const id = "1";

        const options = {
            headers: {
                'Authorization': `${_req.query.token}`,
            },
        };

        const response = await fetch(`https://localhost:${PORT}/subasta//getSubasta/` + id, options);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${_req.query.token}`,
            },
            body: JSON.stringify({ IDs: idCartas }),
        })

        const datos = await conexionInventario.json();
        datos.forEach((carta, index) => {
            carta.ID_SUBASTA = datos[index].ID;
            Object.assign(carta, date[index]);
        });

        res.render("subasta/subasta", { datos });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");

    }
}
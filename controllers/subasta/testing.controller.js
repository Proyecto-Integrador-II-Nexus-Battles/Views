import { HOST, PORT } from "../../config.js";



export const cartasSubasta = async (_req, res) => {
    try {
        const response = await fetch(`${HOST}:${PORT}/subasta/get-cartas-subasta`);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        console.log(idCartas);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
        const query = req.query;
        const params = new URLSearchParams(query).toString();
        const response = await fetch(`${HOST}:${PORT}/subasta/get-cartas-subasta?${params}`);
        const date = await response.json();
        const idCartas = date.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

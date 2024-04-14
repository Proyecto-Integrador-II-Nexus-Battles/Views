import {HOST, PORT} from "../../config.js";

export const cartasSubasta = async (_req, res) => {
    try{
        const response = await fetch(`https://localhost:${PORT}/subasta/get-cartas-subasta`);
        const datos = await response.json();
        const idCartas = datos.map((carta) => carta.ID_CARTA);
        const conexionInventario = await fetch(`${HOST}:${PORT}/inventario/getCardsByIDs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({IDs: idCartas}),
        })
        const cartasInventario = await conexionInventario.json();
        res.json(cartasInventario);

       
    }catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");  

    }
}
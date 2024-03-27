import { log } from "console";
import path from "path";
import { fileURLToPath } from "url";

export const defaultR = async (req, res) => {
  try {
    const response = await fetch("http://localhost:1234/inventario/getEcommerceCard");
    const datos = await response.json();
    datos.forEach((dato) => {
      dato.imagePath = "vitrina_productos/img/cedric.jpg"; 
      console.log(dato.imagePath);
    });
    res.render("vitrina_productos/index", { datos });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const defaultR2 = async (req, res) => {
  const { id } = req.params;
  const encodedID = encodeURIComponent(id);
  const response = await fetch(`http://localhost:1234/inventario/getEcommerceCard/${encodedID}`);
  const datos = await response.json();
  datos.forEach((dato) => {
    dato.imagePath = "vitrina_productos/img/cedric.jpg";
  });
  res.render("vitrina_productos/vistadetallada", { datos });
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};

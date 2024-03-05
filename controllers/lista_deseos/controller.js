//Este es un archivo de ejemplo de un controlador de Node.js. Reemplazar por otro archivo con un controlador real.
import axios from 'axios';


// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => { 
  const respuesta = await axios.post('http://172.24.112.1:3000/lista_deseos', {user_id : 15}); //conexion con el back
  res.render('lista_deseos/index.ejs', { title: 'Lista de Deseos', user: {id : 15}, products: respuesta.data});
  console.log(respuesta.data)  //user: req.session.user, products: rows sesion de usuarios
};



/* export const informacionCarta = async (req, res) => {
  try{
    const respuesta = await axios.get('http://172.24.112.1:3000/lista_deseos', {user_id:15});
    const datos = respuesta.data;

    res.render('lista_deseos/index.ejs', { title: 'Lista de Deseos', user: {id : 15}, datos: respuesta.data}); 
    
  } catch (error) {
    console.error('Error obteniendo la informacion del servidor', error);
    res.status(500).send('Error al obtener datos del servidor');
    }
}; */
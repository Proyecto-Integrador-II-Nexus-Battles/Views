//Este es un archivo de ejemplo de un controlador de Node.js. Reemplazar por otro archivo con un controlador real.
import axios from 'axios';

// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => { 
  const respuesta = await axios.post('http://192.168.1.15:3000/lista_deseos', {user_id : 15}); //conexion con el back
  res.render('lista_deseos/index.ejs', { title: 'Lista de Deseos', user: {id : 15}, products: respuesta.data});
  console.log(respuesta.data)  //user: req.session.user, products: rows sesion de usuarios
}


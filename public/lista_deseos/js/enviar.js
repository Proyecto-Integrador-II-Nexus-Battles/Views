function moverCarroCompras(item_id){
    const url = `http://192.168.39.193:3001/dummy/ADD-CARD`;
    const userId = 15;
    const data = {
      'IdUsuario': userId,
      'IdCard': item_id,
      'Cantidad': 1
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error en la solicitud POST');
    })
    .then(data => {
      console.log('Respuesta del servidor: ', data);
      alert('Su producto fue agregado exitosamente al carro de compras');
      eliminar(item_id);
    })
    .catch(error => {
      console.error('Error en la solicutud: ', error)
    });
  }
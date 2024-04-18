function modificarCarta (idCarta) {
    const encodedID = encodeURIComponent(idCarta);
    console.log(encodedID);
    window.location.href = `/modificacionCarta/${encodedID}`;
}

async function guardarCambios() {
    const nombre = document.getElementById('nombre').value;
    const poder = document.getElementById('poder').value;
    const vida = document.getElementById('vida').value;
    const defensa = document.getElementById('defensa').value;
    const ataque = document.getElementById('ataque').value;
    const daño = document.getElementById('daño').value;
    const descripcion = document.getElementById('descripcion').value;

    const data = {
      nombre,
      poder,
      vida,
      defensa,
      ataque,
      daño,
      descripcion
    };

    try {
      const response = await fetch('/inventario/modifyCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Hubo un problema al guardar los cambios.');
      }
      
      // Hacer algo con la respuesta si es necesario
    } catch (error) {
      console.error(error);
    }
}
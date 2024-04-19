async function comprobarMiBanco() {
  console.log("Comprobando banco de cartas");
  const url = "/vitrina/comprobarMiBanco";
  const token = "Bearer " + localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    }
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      const IDs = responseData.map(item => item.carta._id);
      return IDs;
    } else if (response.status === 301 || response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = "/";
    } else if (response.status === 404) {
      return [];
    } else {
      throw new Error("Error en la solicitud POST");
    }
  } catch (error) {
    console.error("Error en la solicitud: ", error);
    return error;
  }
}

async function addCarro(IdCard) {
  const url = "/vitrina/enviarCarro";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  const data = {
    IdCard: IdCard,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      console.log("Respuesta del servidor: ", responseData);
      console.log("Su producto fue agregado exitosamente al carro de compras");
    } else if (response.status === 301) {
      window.location.href = "/";
    } else {
      console.log("aaaaa");
      throw new Error("Error en la solicitud POST");
    }
  } catch (error) {
    console.error("Error en la solicitud: :)", error);
  }
}

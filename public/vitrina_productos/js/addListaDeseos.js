async function comprobarListaDeseos() {
  console.log("Comprobando lista de deseos");
  const url = "/vitrina/comprobarListaDeseos";
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
      console.log("Se obtuvieron las cartas en la lista de deseos");
      return responseData;
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

function cambiarColor(elemento, IdCard) {
  if (elemento.style.color === "red") {
    eliminarListaDeseos(IdCard);
    elemento.style.color = "black";
  } else {
    addListaDeseos(IdCard);
    elemento.style.color = "red";
  }
}

async function redirectListaDeseos() {
  const url = "/lista_deseos";
  const token = "Bearer " + localStorage.getItem("token");
  if (token === "Bearer null") {
    window.location.href = "/login";
  }
  window.location.href = url + "?token=" + token;
}

async function addListaDeseos(IdCard) {
  console.log("ID del producto: ", IdCard);
  const url = "/vitrina/enviarListaDeseos";
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
      console.log("Su producto fue agregado exitosamente a la lista");
    } else if (response.status === 301) {
      window.location.href = "/";
    } else {
      throw new Error("Error en la solicitud POST");
    }
  } catch (error) {
    console.error("Error en la solicitud: ", error);
  }
}

async function eliminarListaDeseos(IdCard) {
  console.log("ID del producto: ", IdCard);
  const url = "/vitrina/eliminarListaDeseos";
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
      console.log("Su producto fue agregado exitosamente a la lista");
    } else if (response.status === 301) {
      window.location.href = "/";
    } else {
      throw new Error("Error en la solicitud POST");
    }
  } catch (error) {
    console.error("Error en la solicitud: ", error);
  }
}

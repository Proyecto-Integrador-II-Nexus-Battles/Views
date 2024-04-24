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

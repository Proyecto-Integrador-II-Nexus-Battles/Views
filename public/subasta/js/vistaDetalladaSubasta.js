async function vistaDetalladaSubasta(id) {
    console.log(id);
    const url = "/subastaDetallada/" + id;
    const token = "Bearer " + localStorage.getItem("token");
    if (token === "Bearer null") {
      window.location.href = "/login";
    }
    window.location.href = url + "?token=" + token;
  }
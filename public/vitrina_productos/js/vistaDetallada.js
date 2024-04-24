function vistaDetallada(id) {
  const encodedID = encodeURIComponent(id);
  console.log(encodedID);
  window.location.href = `/vistaDetallada/${encodedID}`;
};

function vistaEcommerce() {
  window.history.back();
}

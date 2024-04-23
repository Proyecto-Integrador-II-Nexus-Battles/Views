let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let formData = new FormData(form);

  const fileInput = document.getElementById("avatar");

  const reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  let jsonData = "";

  reader.onload = async function () {
    console.log("0");
    document.getElementById("avataroculto").value = reader.result;
    console.log("1");
    console.log(document.getElementById("avataroculto").value);
    console.log("2");

    const formData = new FormData(form);
    let data = Object.fromEntries(formData);
    // const formDataArray = Array.from(formData.entries());
    console.log(data);
    console.log("3");
    jsonData = JSON.stringify(data);
    console.log("4");
    console.log(jsonData);
    fetch(`/usuario/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        enctype: "multipart/form-data",
        "Access-Control-Allow-Methods": "POST",
      },
      body: jsonData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          alert(result.error);
          return;
        }
        console.log("resultado: " + result);
        window.location.href = "/usuario/confirmar";
      })
      .catch((err) => console.log(err));
  };
}

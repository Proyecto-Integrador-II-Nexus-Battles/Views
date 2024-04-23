const boton_claim = document.querySelector("#boton_claim");
console.log(boton_claim)
boton_claim.addEventListener("click", claim);

function claim(event) {
    event.preventDefault();

    // Extract datos from the hidden input field
    const datos_claim = document.getElementById("datos_claim")


    console.log(datos_claim.value);

    fetch(`/subasta/claim`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "enctype": "multipart/form-data",
            "Access-Control-Allow-Methods": "POST"
        },
        body: JSON.stringify({ datos: datos_claim }) // Send datos_claim in the request body
    })
        .then((res) => res.json())
        .then((result) => {
            console.log("resultado: " + result);
            //window.location.href = "/";
        })
        .catch((err) => console.log(err));
}

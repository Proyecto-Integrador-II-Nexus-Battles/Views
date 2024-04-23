const boton_claim = document.querySelectorAll(".Reclamar_Venta");
console.log(boton_claim)


boton_claim.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton.name + '¡Se hizo clic en un botón!');
        /////////////////////////

        fetch(`/subasta/claim`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "enctype": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",

            },
            body: JSON.stringify({ recompensaId: boton.name })
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("resultado: " + result);

            })
            .catch((err) => console.log(err));

        /////////////////////////////////////////////////////            
    });
});


//boton_claim.addEventListener("click", claim);

function claim(event) {
    event.preventDefault();
    console.log(boton_claim)
    console.log(boton_claim.name)
    // Extract datos from the hidden input field


    console.log(datos_claim.value);


}

const boton_claim = document.querySelectorAll(".Reclamar_Venta");

let id_user = localStorage.getItem("token");
console.log(id_user)


boton_claim.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton.name + '¡Se hizo clic en un botón!');
        /////////////////////////

        fetch(`/subasta/buzon/claim`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${id_user}`
            },
            body: JSON.stringify({ recompensaId: boton.name })
        })
            .then((res) => {
                console.log(res);
                return res.json(); // Agregamos el return aquí
            })
            .then((result) => {
                console.log("resultado: ", result);
            })
            .catch((err) => console.log(err));

        /////////////////////////////////////////////////////            
    });
});


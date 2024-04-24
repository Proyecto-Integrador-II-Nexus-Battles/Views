const boton_claim = document.querySelectorAll(".Reclamar_Venta");

let id_user = localStorage.getItem("token");
console.log(id_user)


boton_claim.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton.name + '¡Se hizo clic en un botón!');
        /////////////////////////

        const response = fetch(`/subasta/buzon/claim`, {
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
                if (result.success === true) {

                    console.log("girlllllllll bye")
                    console.log(document.getElementById(`${boton.name}`))
                    //document.getElementById(`${boton.name}`).style.display = "none";
                    fadeOut(boton.name);
                } else {


                }
            })
            .catch((err) => console.log(err));

        /////////////////////////////////////////////////////            
    });
});

function fadeOut(element) {
    var el = document.getElementById(element);
    var opacity = 1;
    var intervalTime = 50; // Time interval for opacity change
    var duration = 500; // Duration of fade effect in milliseconds
    var steps = duration / intervalTime; // Number of steps to complete the fade effect
    var deltaOpacity = 1 / steps; // Opacity change per step

    var fadeInterval = setInterval(function () {
        if (opacity > 0) {
            opacity -= deltaOpacity;
            el.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval); // Clear interval when opacity reaches 0
            el.style.display = 'none'; // Hide the element after fading out
        }
    }, intervalTime);
}

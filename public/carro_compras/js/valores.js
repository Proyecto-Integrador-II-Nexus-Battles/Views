function calcularPrecios() {
    // Calcular el número total de productos
    let totalProductos = 0;
    cantidadElements.forEach(cantidadElement => {
        const cantidadParagraph = cantidadElement.querySelector('.cantidadx');
        totalProductos += parseInt(cantidadParagraph.textContent);
    });
    numProductosElement.textContent = totalProductos;

    // Obtener el precio total bruto
    let precioTotalBruto = 0;
    const valoresProducto = document.querySelectorAll('.valor p');
    valoresProducto.forEach(valor => {
        const precioProducto = parseFloat(valor.textContent.replace('$', '').trim());
        precioTotalBruto += precioProducto;
    });
    numTotalBElement.textContent = precioTotalBruto.toFixed(2);

    // Calcular el impuesto (IVA)
    const ivaPorcentaje = 0.19; // 19%
    const impuesto = precioTotalBruto * ivaPorcentaje;
    numIvaElement.textContent = impuesto.toFixed(2);

    // Calcular el precio total con impuesto incluido
    const precioTotalConIva = precioTotalBruto + impuesto;
    numTotalElement.textContent = precioTotalConIva.toFixed(2);

    // Enviar información al servidor para calcular el precio total
    axios.post('http://localhost:3000/asdsad', { IdUsuario: 1 })
    .then(response => {
        const listaPreciosSimulado = response.data;
        console.log('Precios simulados:', listaPreciosSimulado);
        
        // Calcular el precio total bruto sumando los precios de las cartas simuladas
        const precioTotalBruto = calcularPrecioTotalBruto(listaPreciosSimulado);
        const numTotalBElement = document.querySelector('.numtotalb');
        numTotalBElement.textContent = precioTotalBruto.toFixed(2);

        // Calcular el impuesto (IVA) como el 19% del precio total bruto
        const ivaPorcentaje = 0.19; // 19%
        const impuesto = precioTotalBruto * ivaPorcentaje;
        const numIvaElement = document.querySelector('.numiva');
        numIvaElement.textContent = impuesto.toFixed(2);

        // Calcular el precio total como la suma del precio total bruto y el impuesto
        const precioTotal = precioTotalBruto + impuesto;
        const numTotalElement = document.querySelector('.numtotal');
        numTotalElement.textContent = precioTotal.toFixed(2);
    })
    .catch(error => {
        console.error('Error al obtener los precios simulados:', error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
    });

function calcularPrecioTotalBruto(listaPreciosSimulado) {
    // Sumar los precios de las cartas simuladas para obtener el precio total bruto
    let precioTotalBruto = 0;
    listaPreciosSimulado.forEach(listaPreciosSimulado => {
        precioTotalBruto += listaPreciosSimulado.precio;
    });
    return precioTotalBruto;
}

}
